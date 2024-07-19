import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpeg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Connect With Me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          I’d love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to send me a message. Your thoughts and inquiries are important, and I’m here to assist with anything you need. Click the button below to reach out and start the conversation. Looking forward to hearing from you soon!
          </p>
          
        </div>
        <Form />
      </article>
    </>
  );
}
