// "use client";
// import { useRef, ReactNode } from "react";

// interface formProps {
//   children: ReactNode;
//   action: (FormData: FormData) => Promise<void | boolean>;
//   className?: string;
//   onSubmit?: () => void;
// }

// const Form = ({ children, action, className, onSubmit }: formProps) => {
//   const ref = useRef<HTMLFormElement>(null)
//   return <form
//     className={className}
//     onSubmit={onSubmit}
//     ref={ref}
//     action={async (formData) => {
//       await action(formData)
//       ref.current?.reset()
//     }}
//   >
//     {children}
//   </form>
// };

// export default Form;



"use client";
import { useRef, ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}

const Form = ({ children, action, className, onSubmit }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    if (ref.current) {
      const formData = new FormData(ref.current);
      try {
        await action(formData); // Call the action with the form data
        ref.current.reset(); // Reset the form if the action is successful
      } catch (error) {
        console.error("Error submitting form:", error); // Log any errors
      }
    }
  };

  return (
    <form
      className={className}
      onSubmit={(event) => {
        handleSubmit(event); // Handle the form submission
        if (onSubmit) onSubmit(); // Call the onSubmit callback if provided
      }}
      ref={ref}
    >
      {children}
    </form>
  );
};

export default Form;

