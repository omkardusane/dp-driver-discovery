export default () => <div>
    <p className="text-gray-500 text-bold pt-6 mb-4 ml-8 mr-8 ">
        Welcome to Driver Discovery!
        <br />
        Here you will be able to filters the drivers connected to The Company Applicants API.
    </p>
    <div className='items-center justify-center flex'>
        <button className='w-md text-white font-bold py-2 px-4 rounded transition delay-50 duration-200 ease-in-out  hover:scale-110  bg-blue-400 hover:bg-blue-600 '
            onClick={() => {
                window.location.href = "/applicants"
            }}
        >
            Enter the portal now!
        </button>
    </div>
</div >