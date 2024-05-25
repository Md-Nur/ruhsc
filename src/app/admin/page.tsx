import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input input-primary input-bordered"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input input-primary input-bordered"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-lg font-semibold">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="input input-primary input-bordered"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-lg font-semibold">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="input input-primary input-bordered"
            placeholder="Enter your address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="graduationYear" className="text-lg font-semibold">
            Graduation Year
          </label>
          <input
            type="number"
            id="graduationYear"
            className="input input-primary input-bordered"
            placeholder="Enter your graduation year"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="degree" className="text-lg font-semibold">
            Degree
          </label>
          <input
            type="text"
            id="degree"
            className="input input-primary input-bordered"
            placeholder="Enter your degree"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="university" className="text-lg font-semibold">
            University
          </label>
          <input
            type="text"
            id="university"
            className="input input-primary input-bordered"
            placeholder="Enter your university"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-lg font-semibold">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="input input-primary input-bordered"
            placeholder="Enter your company"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="position" className="text-lg font-semibold">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="input input-primary input-bordered"
            placeholder="Enter your position"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
