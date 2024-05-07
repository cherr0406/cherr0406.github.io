import Link from "next/link";

export default function Works() {
  return (
    <>
      <h2>Works</h2>
      <h3>Research</h3>
      <ul>
        <li>
          Bachelor thesis *permission required
          <ul>
            <li>Joint research with CyberAgent</li>
            <li>Aug 2023 - Jan 2024</li>
            <li>Accepted at The 38th Annual Conference of JSAI, 2024</li>
          </ul>
        </li>
      </ul>
      <h3>Web Development</h3>
      <ul>
        <li>
          Developing and maintaining the official website of MIS.W (Waseda University student
          circle)
          <ul>
            <li>Apr 2021 - Mar 2023</li>
            <li>Now other members are maintaining</li>
          </ul>
        </li>
      </ul>
      <h3>Personal Projects</h3>
      <ul>
        <li>
          Ingredients Checklist
          <ul>
            <li>Web app for creating a shopping list from the recipe URLs.</li>
            <li> This app is for personal use and published during my job-hunting.</li>
            <li>
              Github repository:{" "}
              <Link
                href="https://github.com/cherr0406/ingredients-checklist"
                target="_blank"
                rel="noopener noreferrer"
              >
                cherr0406/ingredients-checklist
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Md Sticky Notes *in progress
          <ul>
            <li>I&rsquo;m developing this app to improve my Rust and tauri skills.</li>
            <li>
              Github repository:{" "}
              <Link
                href="https://github.com/cherr0406/md-sticky-notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                cherr0406/md-sticky-notes
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
