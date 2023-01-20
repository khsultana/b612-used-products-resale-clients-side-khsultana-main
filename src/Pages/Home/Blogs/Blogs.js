import React from "react";

const Blogs = () => {
  return (
    <div className="mx-auto w-3/4 py-10">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-bold text-red-600">
          All Blog Question & Answer's Here !!!
        </div>
        <div className="collapse-content">
          <h2>
            1. What are the different ways to manage a state in a React
            application?{" "}
          </h2>
          <h2>2. How does prototypical inheritance work? </h2>
          <h2>3. What is a unit test? Why should we write unit tests? </h2>
          <h2>4. React vs. Angular vs. Vue? </h2>
        </div>
      </div>
      <h2 className="text-2xl font-bold py-4 text-red-600">
        1. What are the different ways to manage a state in a React application?
      </h2>
      <h2 className="text-justify">
        Not only are there are a lot of different kinds of state, but there
        often dozens of ways of managing each kind. Which should you choose? In
        this guide, we will uncover the several kinds of state in your React
        apps that you might not be aware of, plus how to manage them in the most
        effective way. <br />
        <b>The Four Kinds of React State to Manage</b> <br />
        When we talk about state in our applications, it’s important to be clear
        about what types of state actually matter.
        <br />
        There are four main types of state you need to properly manage in your
        React apps:
        <br />
        1. Local state <br />
        2. Global state <br />
        3. Server state <br />
        4. URL state <br />
        <br />
        Let's cover each of these in detail:
        <br />
        <b>Local (UI) state – </b> Local state is data we manage in one or
        another component. Local state is most often managed in React using the
        useState hook. For example, local state would be needed to show or hide
        a modal component or to track values for a form component, such as form
        submission, when the form is disabled and the values of a form’s inputs.{" "}
        <br />
        <br />
        <b> Global (UI) state –</b> Global state is data we manage across
        multiple components. Global state is necessary when we want to get and
        update data anywhere in our app, or in multiple components at least. A
        common example of global state is authenticated user state. If a user is
        logged into our app, it is necessary to get and change their data
        throughout our application. Sometimes state we think should be local
        might become global. <br /> <br />
        <b> Server state –</b> Data that comes from an external server that must
        be integrated with our UI state. Server state is a simple concept, but
        can be hard to manage alongside all of our local and global UI state.
        There are several pieces of state that must be managed every time you
        fetch or update data from an external server, including loading and
        error state. Fortunately there are tools such as SWR and React Query
        that make managing server state much easier. <br /> <br />
        <b> URL state –</b> Data that exists on our URLs, including the pathname
        and query parameters. URL state is often missing as a category of state,
        but it is an important one. In many cases, a lot of major parts of our
        application rely upon accessing URL state. Try to imagine building a
        blog without being able to fetch a post based off of its slug or id that
        is located in the URL! There are undoubtedly more pieces of state that
        we could identify, but these are the major categories worth focusing on
        for most applications you build.
      </h2>
      <h2 className="text-2xl font-bold py-4 text-red-600">
        2. How does prototypical inheritance work?
      </h2>
      <h2>
        The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object. Traditionally, in
        order to get and set the [[Prototype]] of an object, we use Object.
        getPrototypeOf and Object.
        <br />
        When we read a property from object , and it's missing, JavaScript
        automatically takes it from the prototype. In programming, this is
        called “prototypal inheritance”.
      </h2>
      <h2 className="text-2xl font-bold py-4 text-red-600">
        3.What is a unit test? Why should we write unit tests?
      </h2>
      <h2>
        Unit testing is a software development process in which the smallest
        testable parts of an application, called units, are individually and
        independently scrutinized for proper operation. This testing methodology
        is done during the development process by the software developers and
        sometimes QA staff. The main objective of unit testing is to isolate
        written code to test and determine if it works as intended. Unit testing
        is an important step in the development process, because if done
        correctly, it can help detect early flaws in code which may be more
        difficult to find in later testing stages. Unit testing is a component
        of test-driven development (TDD), a pragmatic methodology that takes a
        meticulous approach to building a product by means of continual testing
        and revision. This testing method is also the first level of software
        testing, which is performed before other testing methods such as
        integration testing. Unit tests are typically isolated to ensure a unit
        does not rely on any external code or functions. Testing can be done
        manually but is often automated.
      </h2>
      <h2>
        <b>
          {" "}
          Advantages to unit testing include: <br />
          <br />
        </b>{" "}
        The earlier a problem is identified, the fewer compound errors occur.{" "}
        <br />
        Costs of fixing a problem early can quickly outweigh the cost of fixing
        it later. <br /> Debugging processes are made easier. <br />
        Developers can quickly make changes to the code base. <br /> Developers
        can also re-use code, migrating it to new projects.
      </h2>
      <h2 className="text-2xl font-bold py-4 text-red-600">
        4. React vs. Angular vs. Vue?
      </h2>
      <h2>
        <b>4.0 Angular vs React</b>
        <br />
        If the choice you’re making is based on Angular vs React alone, then
        you’ll simply need to consider the pros and cons discussed for those
        libraries in this post. But overall, keep in mind that both libraries
        can be used for mobile and web apps, while Angular is generally better
        for more complex apps that are enterprise-ready. <br />
        <b>4.1 React vs Vue</b>
        <br />
        The choice between React vs Vue is often debated and it’s not an easy
        one. Vue has a vibrant and ever-growing community and has taken over
        popularity vs. React in many respects. React developers are still
        churning out lots of new components and extras, so there’s no sign that
        React is on the decline either. <br />
        <b>4.2 Angular vs Vue</b> <br />
        In most cases, you probably wouldn’t be deciding between only Angular
        and Vue. They are vastly different libraries with very different feature
        sets and learning curves. Vue is the clear choice for less experienced
        developers, and Angular would be preferred for those working on larger
        apps.
      </h2>{" "}
      <br />
      <h2 className="font-semibold text-2xl">
        A brief history of Vue vs React vs Angular
      </h2>{" "}
      <br />
      Before we get into the technical details, let’s first talk about the
      history behind these frameworks – just to better appreciate their
      philosophy and their evolution over time. <br />
      <br />
      <b>How it all started 🐣</b> <br />
      <br />
      <b> Angular,</b> developed by Google, was first released in 2010, making
      it the oldest of the lot. It is a TypeScript-based JavaScript framework. A
      substantial shift occurred in 2016 on the release of Angular 2 (and the
      dropping of the “JS” from the original name – AngularJS). Angular 2+ is
      known as just Angular. Although AngularJS (version 1) still gets updates,
      we will focus the discussion on Angular. <br />
      <b>Vue, </b> also known as Vue.js, is the youngest member of the group. It
      was developed by ex-Google employee Evan You in 2014. Over the last
      several years, Vue has seen a substantial shift in popularity, even though
      it doesn’t have the backing of a large company. The most current version
      is always announced on the official Vue website on their releases page.
      Contributors for Vue are supported by Patreon. It should be noted that Vue
      also has its own GitHub repo, and functions using TypeScript. Further
      reading: Vue.js Tutorial for Beginner Developers. <br />
      <b>React,</b> developed by Facebook, was initially released in 2013.
      Facebook uses React extensively in their products (Facebook, Instagram,
      and WhatsApp). Similar to Vue, the React developers also announce their
      newest version on the blog section of the React website.
    </div>
  );
};

export default Blogs;
