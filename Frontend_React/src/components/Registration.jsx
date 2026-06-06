import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdKey, MdEmail } from "react-icons/md";
import { PiBookOpenTextBold } from "react-icons/pi";

export default function Registration() {
  const [userName, setUsername] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const getStrength = (val) => {
    if (!val) return 0;
    const len = val.length;
    const hasUpper = /[A-Z]/.test(val);
    const hasNum = /[0-9]/.test(val);
    const hasSym = /[^a-zA-Z0-9]/.test(val);
    if (len >= 12 && hasUpper && hasNum && hasSym) return 3;
    if (len >= 10 && (hasUpper || hasNum)) return 2;
    if (len >= 6) return 1;
    return 0;
  };

  const strength = getStrength(userPassword);

  const barColor = (index) => {
    if (strength === 0 || index > strength) return "bg-[#E7E1B1]";
    if (strength === 1) return "bg-red-400";
    if (strength === 2) return "bg-amber-400";
    return "bg-[#0D530E]";
  };

  const handleRegister = async () => {
    try {
        const response = await fetch("/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_name: userName,
                user_email: userEmail,
                user_password: userPassword,
            }),
        });

        const data = await response.json()

        console.log(data);

    } catch (error) {
        console.error(error);
    }
    console.log({ userName, userEmail, userPassword, agreed });
  };

  return (
    <>
      <div className="w-[35%] h-[84%] border-5 rounded-4xl border-[#E7E1B1] z-50 relative left-[-350px] bg-[#FBF5DD] flex flex-col items-center justify-center gap-2.5 shadow-2xl shadow-black/50 py-7">

        {/* Header -------------------------------------------------------- */}
        <div className="w-full h-fit flex flex-col items-center justify-center relative top-[-10px]">
          <h1 className="text-[38px] font-bold font-[DM_Serif_Text] flex items-center justify-center gap-1">
            InkWell
            <PiBookOpenTextBold size={38} className="text-[#0D530E]" />
            <span className="text-[#0D530E]">.</span>
          </h1>
          <h3 className="text-[15px] text-[#636363] relative -left-1">
            Create your account and start your story.
          </h3>
        </div>

        {/* Inputs -------------------------------------------------------- */}
        <div className="w-full h-fit gap-2.5 flex items-center justify-center flex-col">

          {/* Username */}
          <span className="w-[72%] relative ">

            <p className="text-[15px] font-medium px-2 text-[#636363] relative left-4 top-0.4">Username</p>

            <FaUserCircle size={14} className="absolute text-[#636363] top-1.5 left-1" />

            <input
              type="text"
              name="username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="w-full h-12 border-2 border-[#E7E1B1] flex justify-center px-2.5 text-[17px] rounded-2xl focus:border-[#0D530E] outline-none bg-white"
            />

          </span>

          {/* Email */}
          <span className="w-[72%] relative ">

            <p className="text-[15px] font-medium px-2 text-[#636363] relative left-4 top-0.4">Email</p>

            <MdEmail size={14} className="absolute text-[#636363] top-1.5 left-1" />

            <input
              type="email"
              name="email"
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full h-12 border-2 border-[#E7E1B1] flex justify-center px-2.5 text-[17px] rounded-2xl focus:border-[#0D530E] outline-none bg-white"
            />
          </span>

          {/* Password */}
          <span className="w-[72%] relative ">

            <p className="text-[15px] font-medium px-2 text-[#636363] relative left-4 top-0.4">Password</p>

            <MdKey size={14} className="absolute text-[#636363] top-1.5 left-1" />

            <input
              type="password"
              name="password"
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full h-12 border-2 border-[#E7E1B1] flex justify-center px-2.5 text-[17px] rounded-2xl focus:border-[#0D530E] outline-none bg-white"
            />
          </span>

          {/* Strength bars */}
          <div className="w-[72%] flex gap-1.5 -mt-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`flex-1 h-[3px] rounded-full transition-all duration-300 ${barColor(i)}`}
              />
            ))}
          </div>

        </div>

        {/* Terms --------------------------------------------------------- */}
        <div className="w-[70%] flex items-start gap-2 mt-1">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="accent-green-700 w-4 h-4 mt-0.5 flex-shrink-0 cursor-pointer"
          />
          <label htmlFor="terms" className="text-[13.5px] text-[#555] leading-snug cursor-pointer">
            I agree to InkWell's{" "}
            <a href="#" className="text-[#0D530E] font-semibold">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-[#0D530E] font-semibold">Privacy Policy</a>
          </label>
        </div>

        {/* Submit button ------------------------------------------------- */}
        <button
          onClick={handleRegister}
          className="w-[70%] h-12.5 border-[1.5px] border-[#0D530E] rounded-2xl flex justify-center items-center text-[28px] font-bold text-[#E7E1B1] bg-[#0D530E] shadow-black shadow-xl/22 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 mt-1"
        >
          Register
        </button>

        {/* Divider ------------------------------------------------------- */}
        <div className="flex items-center w-[70%] h-fit my-1">
          <div className="grow border-t border-gray-400"></div>
          <span className="mx-3 text-gray-500 text-sm font-medium whitespace-nowrap">
            Already have an account?
          </span>
          <div className="grow border-t border-gray-400"></div>
        </div>

        {/* Footer -------------------------------------------------------- */}
        <p className="w-[70%] text-center text-[17px] -mt-1">
          <a href="#" className="text-[18px] font-bold text-[#0D530E]">Log in</a>
          {" "}to continue reading.
        </p>

      </div>
    </>
  );
}