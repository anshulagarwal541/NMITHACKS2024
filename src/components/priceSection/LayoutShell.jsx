import React from 'react'
import "./styles.css";

export default function LayoutShell({ children }) {
    return (
        <div className="App">
            <main className="container relative w-[100%] pb-8 mx-auto">
                <div className="w-[100%] mx-auto">
                    
                    <h2 className="font-serif text-5xl font-bold text-center text-[#f84611] p-3 sm:px-6 lg:max-w-7xl lg:px-8">
                        Prizes
                    </h2>

                    {children}
                </div>
            </main>
        </div>
    )
}
