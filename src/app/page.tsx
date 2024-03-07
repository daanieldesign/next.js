import {Input} from "@nextui-org/react";

export default function Home(){
    return (<div>
        <h2>Create your own Todo!</h2>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="name" label="Title" placeholder="Enter your name" />
            <Input type="email" label="Content" placeholder="Enter your todo" />
            <Input type="email" label="authorID" placeholder="Enter your email" />
        </div>
        </div>
    );
}