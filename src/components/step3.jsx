import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseCheese, chooseSause } from "../redux/rootSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Step3() {
  const disPatch = useDispatch();
  const Navigate = useNavigate();
  const sause = useSelector((state) => state.root.sause);
  const cheese = useSelector((state) => state.root.cheese);

  const { register, handleSubmit } = useForm({
    defaultValues: { sause, cheese },
  });

  const onSubmit = (data) => {
    disPatch(chooseSause(data.sause));
    disPatch(chooseCheese(data.cheese));

    Navigate("/result");
  };
  return (
    <>
      <div className="flex-col  flex  items-center justify-center h-screen">
        <form
          className="py-28 rounded-3xl bg-white px-28 place-items-center   shadow-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="pb-10">
            <label className="text-2xl  font-bold" htmlFor="sause">
              Pick sause type:
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="sause"
              id="sause"
              {...register("sause")}
            >
              <option value="garlic">no_sause</option>
              <option value="garlic">maines</option>
              <option value="garlic">garlic</option>
            </select>
          </div>
          <div className="pb-10">
            <label className="text-2xl font-bold" htmlFor="cheese">
              cheese type:
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="cheese"
              id="cheese"
              {...register("cheese")}
            >
              <option value="feta">Feta</option>
              <option value="blue cheese">blue cheese</option>
              <option value="cream cheese">cream cheese</option>
            </select>
          </div>
          <div className="flex place-items-center">
            <button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
              type="onsubmit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Step3;
