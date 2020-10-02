import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context) => {
    console.log('book');
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    console.log('1');
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  })
  .get("/:any/:id", (context) => {
    console.log('2');
    context.response.body = Array.from(books.values());
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
