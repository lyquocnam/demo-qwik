import { $, component$ } from "@builder.io/qwik";
import {
  routeAction$,
  type DocumentHead,
  zod$,
  z,
} from "@builder.io/qwik-city";

export const useHello = routeAction$(
  async (data) => `Hello ${data.name}`,
  zod$({ name: z.string().min(1) })
);

export default component$(() => {
  const sayHello = useHello();
  const handleServerCall = $(() => sayHello.submit({ name: "Nam" }));
  return (
    <>
      <h1>👋</h1>
      <p>Message:</p>
      <pre>
        {
          // @ts-ignore
          JSON.stringify(sayHello.value, "", 1)
        }
      </pre>
      <button
        style={{ padding: "10px", backgroundColor: "bisque" }}
        onClick$={handleServerCall}
      >
        Call server
      </button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
