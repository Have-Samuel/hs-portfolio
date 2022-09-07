function Contact() {
  return (
    <div>
      <form className="form" action="https://formspree.io/f/xrgjezpe" method="post">
        <label>Full Name</label>
        <input type="text" name="name" id="name" placeholder="Samwell Walker" required maxLength={30} />
        <label>Email Address</label>
        <input type="email" name="email" id="email" required placeholder="samwlk@gmail.com" />
        <textarea name="message" id="msgs" cols="20" rows="10" placeholder="Enter text here" required maxLength={450}></textarea>
        <button type="submit" className="submitbtn">Get in touch with me</button>
      </form>
    </div>
  )
}

export default Contact;
