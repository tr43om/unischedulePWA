"use client";

import { SlSocialVkontakte } from "react-icons/sl";
import { RiTelegramFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { twClassNames } from "@/utils";
import { BsEnvelopeCheck } from "react-icons/bs";
import { HomeButton } from "@/components";
import { send, init } from "@emailjs/browser";

const reasons = [
  "Предложить интересную идею",
  "Предложить работу (напр. кассиром)",
  "Высказать своё мнение",
  "Сообщить об ошибке",
];

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    await send(
      "service_d8z5xns",
      "unischedule",
      {
        name: data.name ? data.name : "Анонимус",
        message: data.message,
        user_email: data.email,
      },
      "r2epx_k9URnp6qNnb"
    );
  };

  return (
    <div className="mx-auto  max-w-4xl  px-4 py-8">
      <header className="mb-8">
        <h1 className="text-5xl font-bold">
          Сделаем <br />
          <span className="text-gradient text-6xl uppercase">это</span>
          <br /> вместе
        </h1>
      </header>
      <main>
        <h3 className="mb-2 text-lg">
          Возможные причины, по которым можно ко мне обратиться:
        </h3>
        <ul className="mb-6 flex flex-wrap gap-2">
          {reasons.map((reason, i) => (
            <li className="badge" key={`reason-${i}`}>
              {reason}
            </li>
          ))}
        </ul>
        {isSubmitSuccessful ? (
          <div className="grid  justify-items-center gap-4">
            <button className="btn-success btn-circle btn-lg btn">
              <BsEnvelopeCheck className="h-7 w-7" />
            </button>
            <p>Спасибо за обратную связь!</p>
          </div>
        ) : (
          <form
            className="mb-6 flex flex-wrap items-center justify-between gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control grid w-full flex-1 basis-1/2 gap-4 md:max-w-sm">
              <label className="grid">
                <input
                  type="text"
                  placeholder="Как к вам обращаться?"
                  className="input-bordered input w-full "
                  {...register("name")}
                />

                <span className="label-text-alt  mt-1 flex text-neutral-content">
                  *необязательно, если хотите обратиться анонимно
                </span>
              </label>
              <input
                type="text"
                placeholder="Почта"
                className={twClassNames(
                  Boolean(errors.email) && "input-error",
                  "input-bordered input w-full "
                )}
                {...register("email")}
              />
              {errors.email && (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 flex-shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{errors.email.message}</span>
                  </div>
                </div>
              )}
            </div>
            <textarea
              className="textarea-bordered textarea min-h-[8.3rem] flex-1 basis-full md:basis-1/2"
              placeholder="Так вот, я хочу сообщить, что..."
              {...register("message")}
            ></textarea>
            {errors.message && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{errors.message.message}</span>
                </div>
              </div>
            )}
            <button type="submit" className="btn basis-full">
              отправить
            </button>
          </form>
        )}
        <div className="flex gap-2">
          <a
            className="btn-square btn "
            href="https://t.me/tr43o"
            target="_blank"
          >
            <RiTelegramFill className="h-6 w-6" />
          </a>
          <a
            className="btn-square btn"
            href="https://vk.com/tr43om"
            target="_blank"
          >
            <SlSocialVkontakte className="h-6 w-6" />
          </a>
          <a
            className="btn-square btn"
            href="https://discordapp.com/users/475026604524044288/"
            target="_blank"
          >
            <FaDiscord className="h-6 w-6" />
          </a>
        </div>
      </main>
      <HomeButton />
    </div>
  );
};

export default Contacts;

const validationSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .min(4, { message: "Необходимо ввести почтовый адрес" })
    .email({ message: "Неверный формат email " }),
  message: z.string().min(1, { message: "Введите больше одного символа" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;
