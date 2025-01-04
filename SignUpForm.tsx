import * as React from 'react';
import { InputField } from './InputField';
import { SocialSignInButton } from './SocialSignInButton';

export const SignupForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const socialProviders = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3eccc92eb8aa260a7df97c65b503fec4da956dad4a2bdf39b9047c0fceef5fdd?placeholderIfAbsent=true&apiKey=24ae16fc9c854a53acaa77b066a82ad3",
      provider: "Google",
      alt: "Google logo"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea92197b6acd63dc3b10a8040ff353319ab323eeea66e78ba71af883ec744cb?placeholderIfAbsent=true&apiKey=24ae16fc9c854a53acaa77b066a82ad3",
      provider: "Apple",
      alt: "Apple logo"
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col justify-center items-center px-20 py-44 w-full min-h-[1024px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/02abf436136c36be69ccd84ac2b93a3c5b04e17910dcbd1fd9f73c5e4b57075c?placeholderIfAbsent=true&apiKey=24ae16fc9c854a53acaa77b066a82ad3"
          alt="Background decoration"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center px-20 py-9 -mb-9 max-w-full bg-stone-300 bg-opacity-90 rounded-[36px] w-[615px] max-md:px-5 max-md:mb-2.5">
          <div className="flex flex-col">
            <h1 className="self-center text-3xl font-bold text-neutral-700">
              Get Started Now
            </h1>
            <form onSubmit={handleSubmit} className="flex gap-2.5 items-start pb-16 mt-2.5 h-[527px]">
              <div className="flex flex-col rounded-none min-w-[240px] w-[404px]">
                <InputField
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                />
                <div className="mt-5">
                  <InputField
                    label="Email address"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                  />
                </div>
                <div className="mt-5">
                  <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter"
                    id="password"
                  />
                </div>

                <div className="flex gap-1.5 self-start mt-5 text-xs font-medium text-black">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="h-2.5 w-[9px] rounded-sm border border-black"
                  />
                  <label htmlFor="terms" className="basis-auto">
                    I agree to the <span className="underline">terms & policy</span>
                  </label>
                </div>

                <button 
                  type="submit"
                  className="flex flex-col pb-2.5 mt-8 w-full bg-neutral-700 rounded-xl border border-lime-900 min-h-[32px] items-center justify-center"
                >
                  <span className="text-sm font-bold text-white">Signup</span>
                </button>

                <div className="text-center mt-14 max-md:mt-10">
                  <span className="px-1 text-xs font-medium text-black bg-white">Or</span>
                </div>

                <div className="flex gap-6 items-start mt-16 text-xs font-medium text-black max-md:mt-10">
                  {socialProviders.map((provider, index) => (
                    <SocialSignInButton key={index} {...provider} />
                  ))}
                </div>

                <div className="flex flex-col self-center mt-6 max-w-full text-sm font-medium text-black min-h-[23px] w-[183px]">
                  <div className="w-full rounded-none">
                    Have an account? <a href="#" className="text-blue-700">Sign In</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}