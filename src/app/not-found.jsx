import Link from "next/link";


const NotFound = () => {
    return (
        <div className="h-[80vh] flex flex-col justify-center items-center gap-8">
            <h1 className="text-5xl text-[#403F3F] font-bold">This page is not found</h1>
            <Link href={'/'}>
                <button className="btn btn-soft">Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;