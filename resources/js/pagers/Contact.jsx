import React, { useState } from "react";
import Footer from "../accueil_stick/Footer";
import Contact from '../../../public/img/Contact.svg'
function MyApp() {
    const [show, setShow] = useState(false);
    return (
        <>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
		</div>
		<img src={Contact} alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="name" className="text-sm">Full name</label>
			<input id="name"  type="text" placeholder="entre full name" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="text-sm">Email</label>
			<input id="email"  placeholder="entre email" type=" email" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label for="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" placeholder="entre message" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
	</form>
</div>
{/* <div><Footer/></div> */}
       </>
    );
}

export default MyApp;
