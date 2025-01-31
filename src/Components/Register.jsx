import React,{useState} from 'react';

function Register() {
  const [showModal, setShowModal] = useState(false);
  return (
    
    <div>

   <section className='flex flex-col bg-gray-50 dark:bg-gray-900 min-h-screen items-center justify-center px-6'>
    <div className='max-w-md w-full  bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700'>
      <div className='p-6 space-y-4 sm:p-8'>
        
          <h1 className='text-xl text-gray-600 font-bold md:text-2xl dark:text-blue-600  '>Create an account</h1>
          <form className='space-y-4'>
            <div>
              <label htmlFor="email"
              className=' text-gray-600 mb-2 text-sm font-medium block '>Email</label>
              <input
               type="input" id='email' 
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              placeholder='name@company.com'
              required />
            </div>
            <div>
              <label htmlFor="password"
              className=' text-gray-600 mb-2 text-sm font-medium block '>Password</label>
              <input
               type="password" id='password' 
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              placeholder='********'
              required />
            </div>
            <div>
              <label htmlFor="confirm-password"
              className=' text-gray-600 mb-2 text-sm font-medium block '>Confirm password</label>
              <input
               type="password" id='confirm-password' 
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              placeholder='********'
              required />
            </div>
            <div className='flex items-start'>
              <div className=''>
                <input type="checkbox" id='terms' className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus-ring-3 focus-primary dark:bg-gray-700 dark:border-gray-600 ' />

              </div>
              <div className='text-sm ml-3'>
                <label htmlFor="terms" className='text-gray-500 font-light dark:text-gray-300'>
                  I accept the {" "}
                  <a href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true);
                  }}
                  className='font-medium text-primary-600 hover:underline dark:text-primary-600 '>Terms and Conditions</a>
                </label>
              </div>
            </div>
            {/* <button  className="w-full  text-black hover:text-blue-600 hover:border-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:bg-primary-600 dark:hover:bg-primary-700">Create an account</button> */}
            <button className='text-primary-600 border-1 rounded-lg border-gray-600 font-medium px-2.5 py-1.5 w-full hover:text-blue-600 hover:border-blue-600 dark:text-white'>Create an Account</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
               href="#"
               className="font-medium text-primary-600 hover:underline hover:text-blue-600 dark:text-primary-500"
              >
              Login here
              </a>
           </p>
          </form>
        
      </div>
    </div>
   </section>

       {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-blur-md bg-opacity-100 dark:bg-transparent dark:bg-opacity-100">
          <div className="bg-gray-50  dark:bg-gray-800 border-2 border-gray-500 rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Terms and Conditions</h2>
            <p className=" text-amber-200  mt-2">
              By creating an account, you agree to our terms and conditions. Please read them carefully.
            </p>
            <p className='text-gray-600 dark:text-gray-300'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro magni ea id maiores? Repellat ipsum laudantium exercitationem reiciendis fuga consequatur sint placeat dolore maiores optio! Quam adipisci harum assumenda enim laboriosam, excepturi aspernatur dolorum inventore itaque modi consectetur animi natus quia impedit, odio commodi consequuntur at rem nam asperiores voluptate!
              </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-primary-600 font-medium text-blue-600 rounded-md hover:bg-primary-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}



export default Register;
