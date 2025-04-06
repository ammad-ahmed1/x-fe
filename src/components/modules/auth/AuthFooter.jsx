const AuthFooter = () => {
  const footerLinks = [
    { text: "About", path: "/about" },
    { text: "Download the X app", path: "/download" },
    { text: "Help Center", path: "/help" },
    { text: "Terms of Service", path: "/terms" },
    { text: "Privacy Policy", path: "/privacy" },
    { text: "Cookie Policy", path: "/cookies" },
    { text: "Accessibility", path: "/accessibility" },
    { text: "Ads info", path: "/ads" },
    { text: "Blog", path: "/blog" },
    { text: "Careers", path: "/careers" },
    { text: "Brand Resources", path: "/brand" },
    { text: "Advertising", path: "/advertising" },
    { text: "Marketing", path: "/marketing" },
    { text: "X for Business", path: "/business" },
    { text: "Developers", path: "/developers" },
    { text: "Directory", path: "/directory" },
    { text: "Settings", path: "/settings" },
    { text: " © 2025 X Corp." },
  ];

  return (
    <footer className="max-w-full mx-auto p-4 text-xs text-gray-500">
      <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
        {footerLinks.map((link, index) => (
          // Temporary using <a> tags until React Router is installed
          // Replace with <Link> when router is available:
          // <Link key={index} to={link.path} className="hover:underline">
          <a
            key={index}
            href={link.path}
            className="hover:underline"
            onClick={(e) => {
              e.preventDefault(); // Remove this in production
              console.log(`Navigating to ${link.path}`); // For demo only
            }}>
            {link.text}
          </a>
        ))}
      </nav>
      <div></div>
    </footer>
  );
};

export default AuthFooter;
