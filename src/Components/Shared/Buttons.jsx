

const Buttons = ({heading , icon}) => {
    return (
        <button className="my-10 btn hover:border-none hover:shadow-2xl  border-[#004080]   bg-clip-text  text-transparent  bg-gradient-to-r  from-purple-500  via-blue-500   to-green-500     w-fit cursor-pointer px-4 py-2 rounded-full   " ><span className="">{icon}</span>  {heading}</button>
    );
 
};

export default Buttons;