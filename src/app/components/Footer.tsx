import Image from 'next/image'
import lee from '../../assets/images/lee.jpg'

export async function Footer() {
    return (
        <footer className="text-center relative bottom-0 bg-slate-300 py-5 align-center flex ">
        <div className="container mx-auto">        
           
            
            <div className=" font-black flex row mb-10 center justify-center ">
                <a href="#0"><i className="mx-10 ">Facebook</i></a>
                <a href="#0"><i className="mx-10 ">Instagram</i></a>
                <a href="#0"><i className="mx-10 ">Linkedin</i></a>
                <a href="#0"><i className="mx-10 ">Twitter</i></a>
            </div>

            <p>&copy; 2018 Template One. All Rights Reserved.</p>
        </div>

        
    </footer> 
    )

}