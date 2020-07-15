import React, { Component } from 'react';
import '../../src/tailwind.css';

//className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
//<img className="absolute inset-0 h-full w-full object-cover object-center" src="health.jpg" alt="City Health" />

class Home extends Component {
    render() {
        return (
            <div className="bg-gray-300">
                <div className="bg-gray-100 flex">
                    <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
                        <div className="xl:max-w-lg xl:ml-auto">                            
                            <img className="h-10"  src="CityScope-1.png" alt="City Scope" />
                            <div><img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center" src="health.jpg" alt="City Health" />
                                <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                                    You can always be informed about your city's health
                                    <br className="hidden lg:inline" /><span className="text-indigo-500">Take advantage of it.</span>
                                </h1>
                            </div>

                            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                                CityScope helps you track your city's dangerous disease overview and keeps you prepared for any potential outbreaks.
                                </p>
                            <div className="mt-4 sm:mt-6">
                                <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">Track your City</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2 lg:relative">
                    </div>
                </div>
            </div>
        )
    }

}

export { Home };