export default (props) => (<button onClick={props.onclick}
    className='p-2 m-1 text-white rounded transition duration-100 ease-in-out  hover:scale-x-110  bg-blue-300 hover:bg-blue-600 '>
    {props.text}
</button>)