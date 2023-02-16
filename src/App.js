import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App w-full h-screen text-white bg-green-400">
      <h1 className='text-3xl'>Lorem ipsum dolor sit amet.</h1>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-around'>
          <div>Lorem, ipsum dolor.</div>
          <div>Add <span>+</span></div>
        </div>
        <div className='flex flex-col'>

          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Type
                          </th>
                          <td class="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                <option>ReactJS Dropdown</option>
                                <option>Laravel 9 with React</option>
                                <option>React with Tailwind CSS</option>
                                <option>React With Headless UI</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>

                  <td class="px-6 py-4">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Add Friend
                          </th>
                          <td class="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                <option>ReactJS Dropdown</option>
                                <option>Laravel 9 with React</option>
                                <option>React with Tailwind CSS</option>
                                <option>React With Headless UI</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Name
                          </th>
                          <td class="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <input type="text" name="" id="" className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600' />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>

                  <td class="px-6 py-4">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Date
                          </th>
                          <td class="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <input type="date" name="" id="" className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600' />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Type
                          </th>
                          <td class="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                <option>ReactJS Dropdown</option>
                                <option>Laravel 9 with React</option>
                                <option>React with Tailwind CSS</option>
                                <option>React With Headless UI</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>

                  <td class="px-6 py-4">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Amount
                          </th>
                          <td class="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <input type="number" name="" id="" className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600' />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[20%] my-2 py-2 px-4 rounded-lg">
              Button
            </button>
          </div>




          <div class="relative overflow-x-auto">

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 w-full dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Type
                          </th>
                          <td class="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                <option>ReactJS Dropdown</option>
                                <option>Laravel 9 with React</option>
                                <option>React with Tailwind CSS</option>
                                <option>React With Headless UI</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                  <td class="px-6 py-4">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Add Friend
                          </th>
                          <td class="px-6 py-4">
                            <div className="relative w-full lg:max-w-sm">
                              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                                <option>ReactJS Dropdown</option>
                                <option>Laravel 9 with React</option>
                                <option>React with Tailwind CSS</option>
                                <option>React With Headless UI</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    type
                  </th>
                  <th scope="col" class="px-6 py-3">
                    name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Friends
                  </th>
                  <th scope="col" class="px-6 py-3">
                    date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    edit
                  </th>
                  <th scope="col" class="px-6 py-3">
                    delete
                  </th>
                </tr>
              </thead>
              <tbody className='text-black w-[100%] flex justify-center'>
                coming soon....
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
