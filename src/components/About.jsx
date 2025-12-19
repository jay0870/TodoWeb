import "./about.css";
export function About() {
  return (
    <div className="about-todo">
      <h1>About ToDo</h1>
      <div class="underline"></div>

      <p>
        A to-do list is a list of items that
        <span class="highlight">need to be completed.</span>
        The items on the list can range from simple activities like replying to
        an email, to more complex tasks like creating project briefs.
      </p>

      <p>
        The items on a to-do list are usually
        <span class="highlight">action-oriented</span>, such as “Schedule a meet
        with the R&D team” or “Call back customer X.” Some lists include more
        abstract goals, such as “improve your time management skills” or “learn
        how to use a new software program.”
      </p>
    </div>
  );
}
