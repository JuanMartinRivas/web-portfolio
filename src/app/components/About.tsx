import { Github, Linkedin } from "lucide-react";
import profile from "../../assets/profile.jpg";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center bg-linear-to-br from-purple-50 to-white">
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <img src={profile} className="w-48 h-48 rounded-full shrink-0" />

                        <div className="flex-1">
                            <h1 className="text-5xl mb-4">Hi, I'm Juan Martín Rivas</h1>
                            <h2 className="text-2xl text-gray-600 mb-6">Front End && Mobile Developer</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                I am a Front-End Developer with knowledge of HTML, CSS, SASS, JavaScript and python. My main framework is React. I use web bundlers such as Parcel and Webpack (although I prefer Parcel). I enjoy tackling complex challenges, whether it's creating pixel-perfect UI designs, improving web performance or integrating APIs.
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/JuanMartinRivas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/juanmartinrivas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
                                >
                                    <Linkedin size={24} />
                                </a>
                                {/* <a
                                    href="mailto:jmartinrivas14@gmail.com"
                                    className="p-3 bg-red-600 text-white rounded-full hover:bg-red-400 transition-colors"
                                >
                                    <Mail size={24} />
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
