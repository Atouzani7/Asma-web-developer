import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full h-20 flex flex-row  items-left  solid  yellow-300  2">
            {/* <h1 className="text-2xl font-bold">Header</h1> */}
            <Image
                // className="dark:invert" 
                src="/logoAT.svg"
                alt="logo"
                width={180}
                height={38}
                priority
                className="justify-end  solid  red-200  2 "
            />
            <div className="flex justify-start items-end w-full m-1">
                <h3 className="flex justify-end  w-full  solid  red-500  2 ">test</h3>
                <h3 className="flex justify-end  w-full  solid  red-500  2 ">test</h3>
                <h3 className="flex justify-end items-end w-full  solid  red-500  2 ">test</h3>
                <h3 className="flex justify-end items-end w-full  solid  red-500  2 ">test</h3>

            </div>

        </header>
    );
}