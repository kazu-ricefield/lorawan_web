function loadNavbar() {
    document.getElementById("navbar").innerHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="overview.html">Overview</a></li>
            <li class="dropdown">
                <a href="contents.html" class="dropbtn">Contents</a>
                <div class="dropdown-content">
                    <a href="contents.html#anchor1">Anchor 1</a>
                    <a href="contents.html#anchor2">Anchor 2</a>
                </div>
            </li>
            <li><a href="links.html">Links</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>`;
}
