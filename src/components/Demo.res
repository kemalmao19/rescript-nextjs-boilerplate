@react.component
let make = () => {
    <div className="flex flex-col items-center mt-10 gap-10">
        <div className="text-3xl">{"Hello, This is Rescript"->React.string}</div>
        <div className="flex gap-5">
            <Next.Image src="/next.svg" width={200.0} height={200.0} alt={"nextjs"}/>
            <Next.Image src="/vercel.svg" width={200.0} height={200.0} alt={"nextjs"}/>
        </div>
        <Next.Link href="https://github.com/kemalmao19/rescript-nextjs-boilerplate.git"><Next.Image src="/github.svg" width={200.0} height={200.0} alt={"nextjs"}/></Next.Link>
    </div>
}