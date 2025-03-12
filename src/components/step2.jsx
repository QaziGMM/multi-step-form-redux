import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chooseCrust, chooseKatchup } from "../redux/rootSlice";
import { useForm } from "react-hook-form";

function Step2() {
  const disPatch = useDispatch();
  const Navigate = useNavigate();
  const base = useSelector((state) => state.root.base);
  const katchup = useSelector((state) => state.root.katchup);

  const { register, handleSubmit } = useForm({
    defaultValues: { base, katchup },
  });

  const onSubmit = (data) => {
    disPatch(chooseCrust(data.base));
    disPatch(chooseKatchup(data.katchup));

    Navigate("/step3");
  };
  return (
    <>
      <div className="flex-col  flex  items-center justify-center h-screen">
        <form
          className="py-28 rounded-3xl bg-white px-28 place-items-center   shadow-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="pb-10">
            <label className="text-2xl  font-bold" htmlFor="crust">
              Pick crust:
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="base"
              id="crust"
              {...register("crust")}
            >
              <option value="classice_thin">classice_thin</option>
              <option value="classice_pan">classice_pan</option>
              <option value="classice_man">classice_man</option>
            </select>
          </div>
          <div className="pb-10">
            <label className="text-2xl font-bold" htmlFor="katchup">
              Katchup type:
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="katchup"
              id="katchup"
              {...register("katchup")}
            >
              <option value="tomato">banana</option>
              <option value="tomato">fruit</option>
              <option value="tomato">tomato</option>
            </select>
          </div>
          <div className="flex place-items-center">
            <button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
              type="onsubmit"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Step2;
