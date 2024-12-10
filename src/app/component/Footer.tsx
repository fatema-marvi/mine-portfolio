import React from "react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradiant-to-r from-purple-600 via-pink-600 to-red-600 text-white p-6">
            <div className="container mx-auto flex flex-c0l md:flex-row justify-between items-center">
<div className="flex space-x-4 mt-4 md:mt-0">
<a href="https://github.com/account">
<Button className="bg-gray-700 hover:bg-gray-500">Github</Button>
</a>
<a href="www.linkedin.com/in/fatema-marvi-81a797295">
<Button className="bg-gray-700 hover:bg-gray-500">LinkedIn</Button>
     </a>
     </div>
            </div>
        
        </footer>
    );
};
export default Footer