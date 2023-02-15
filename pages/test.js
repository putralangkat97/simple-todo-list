import { useState, useEffect } from "react";
import Todo from "@/helper/Todo";
import { useRouter } from "next/router";

const Test = () => {
    const [dataApi, setDataApi] = useState([])
    const { isReady } = useRouter()

    const fetchData = async () => {
        try {
            const res = await Todo.getTodoList()
            setDataApi(res.data.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!isReady) {
            return;
        } else {
            fetchData();
        }
    }, [])

    return (
        <>
            <div className="bg-gray-50 mt-10 mx-auto w-1/2 shadow-md rounded p-10">
                {dataApi && dataApi.map((item, index) => (
                    <div key={index} className="bg-white shadow-sm rounded p-2 m-4 border border-blue-100">
                        <h3 className="px-4 font-medium uppercase text-xl text-gray-700">{item.title}</h3>
                        <div className="flex justify-between items-center px-4">
                            <div className="text-gray-500">
                                {item.body}
                            </div>
                            <div>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Test;