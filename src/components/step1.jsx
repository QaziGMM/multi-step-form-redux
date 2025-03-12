import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseBase, choosePizza } from "../redux/rootSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Step1() {
  const disPatch = useDispatch();
  const Navigate = useNavigate();
  const base = useSelector((state) => state.root.base);
  const pizza = useSelector((state) => state.root.pizza);

  const { register, handleSubmit } = useForm({
    defaultValues: { base, pizza },
  });

  const onSubmit = (data) => {
    disPatch(chooseBase(data.base));
    disPatch(choosePizza(data.pizza));

    Navigate("/step2");
  };
  return (
    <>
      <div className="flex-col  flex  items-center justify-center h-screen">
        <form
          className="py-28 rounded-3xl bg-white px-28 place-items-center   shadow-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="pb-10">
            <label className="text-2xl  font-bold" htmlFor="base">
              Pick Base:
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="base"
              id="base"
              {...register("base")}
            >
              <option value="small">small</option>
              <option value="mediun">medium</option>
              <option value="large">large</option>
            </select>
          </div>
          <div className="pb-10">
            <label className="text-2xl font-bold" htmlFor="pizza">
              Pizza type:
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="pizza"
              id="pizza"
              {...register("pizza")}
            >
              <option value="cheez">cheez</option>
              <option value="atylian">atylian</option>
              <option value="khbab">khbab</option>
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

export default Step1;
