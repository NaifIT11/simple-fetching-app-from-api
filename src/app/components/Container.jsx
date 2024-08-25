

export default function Container({children}){
    return (
        <div className="
        md:w-1/2
        w-11/12
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        ">
         {children}
        </div>
    )
};