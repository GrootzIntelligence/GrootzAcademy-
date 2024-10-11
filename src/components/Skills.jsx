import React from "react";
import '../components/css/Skills.css';

const Skills = () => {
  const handleDownload = () => {
    console.log("Download initiated");
  };

  return (
    <section className="skills-section">
      <h3 className="skills-title">Skills That Make You Industry-Ready</h3>
      <h5 className="skills-subtitle">
        Our industry-focused curriculum, delivered by industry-trained instructors, boosts your career growth.
      </h5>

      <div className="courses-section">
        <div className="courses-intro">
          <h2>Design Courses &gt;&gt;</h2>
          <p>Enhance your creative skills with the right technical training.</p>
        </div>

        <div className="courses-cards">
          <div className="course-card">
            <img
              src="https://s3-alpha-sig.figma.com/img/5896/ae7d/165f89ce0cdb5cc00385ea88f796ac3b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkcwEhPNVENoJpHxXfPhnOcjsabzL848bbdWJcwcnANpMzLBSAQyK8WyOl0dCN3Ts1BuLs~4d5Y9ASSJ4U~piQaJ136CRO0dZxkYZek9nR-g2pqTPTyzU2XuXrz6~cCmfBHiyi-wXtMkplLCr0-X4TlnWZBRQuPtgKQa1BDUeNZYqdwtKIHS4iDrnkKBRKY-Sg8p4suFeNulvaTSgon~t5ft0TivY13GPaHmpHjjINYRy2BM0cd1rZyrJ2ZY0EygmjzeApPfatvlswtAH5v8CnnvC2mbuQHYIKwOg65spD61TIgq0mMg5vtxN~156uUnbYxeXweX3jQEKRWdPKppsA__"
              alt="UI/UX Design"
              className="course-image"
            />
            <h3>UI/UX Design</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>

          <div className="course-card">
            <img
              src="https://s3-alpha-sig.figma.com/img/574f/7ca4/b01178bbab9bf423749991ebfe4af839?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FHCzwTvAyor7pIlP80alHmex97GASwTCGfd1XFkG83LUzqlm9STST0IKgXWpu7Of1yzZM-8zxZZhrz8AiyuiJplv0sK6wEGxCC25Y4vwsG32aL19FSs~oVSEJWrPfIAkWpuzmIpGfvc6xlBTsuqVA1Aupk5M2Hc0UhVQZU5~CMU3CPrxXSsoN5qWZruB-NpBLUOJOx720JZfztm5gNkyp1MbBwLnVsPKnzX2QnqGhJJItRtj-1Kh1aJurUwcc2d6gYkLazm9hB3rGMeD5h9QqtQSYwk-kfH0rRbAxGkXFzjehyT~G4zo-p2UApZsfnnmIi~4XrDVR5yYKx77phRTXg__"
              alt="Graphics Design"
              className="course-image"
            />
            <h3>Graphics Design</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>
        </div>
      </div>
      <div className="courses-section">
        <div className="courses-intro">
          <h2>Coding Courses &gt;&gt;</h2>
          <p>Build a successful career with your tech skills and our innovative training.</p>
        </div>

        <div className="courses-cards">
          <div className="course-card">
            <img
              src="https://s3-alpha-sig.figma.com/img/413b/a57c/dd7111f4802a3236af2be8ccd610e8a1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kr46FkdDOVtbSTXbxDXpMqIkYNibfG8yn34Z-k8d3y6JOXJrjQTZXAh72VmazMDY2eHr1pRPxfq2XpgcDSSaGvsVZ43Me0cNdD6Mi7IzMFpzuANLrLkjLgkLH~YyJKYuvv6Fh~QtAb-CHWopgjEb-LCkRQYddD4aR2TAdEMwUAoPYs7~3CLuD4QtzmSVuebbC-usGFvI~KsCu08aViKfRG0D5m0lhSGCe23D9RprYiwKseSbhEBf9OCEZVd6EMG5USxPK55uPlCZV~-LzdTYaZUKuCNVcc-f0tR7IMI7S-8pKIFpAjmpJ9IKLtyaeXZdlyY-2NHGMmUFe1NRme0EYw__"
              alt="UI/UX Design"
              className="course-image"
            />
            <h3>Web Design</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>

          <div className="course-card">
            <img
              src="https://s3-alpha-sig.figma.com/img/2dbe/960e/c474c7ce2b2e42b9a16ec8848ec92a02?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwQYRg0QwO1e9QacoComOWkn5epsGEnK3qaTR5GZavq4SEQAqin~MJrcEPs78GosOcq6m3H-FuDX~zl13kyvyabMFlewavGcOJy0yj2UEKwwfSl1GCD0AViB64oea4u9EgVKd5iy~NULD20L9-5tpeRSRv69Ltgd5CzxT4DfuC1VxNAdi0mkTm4pH3ITf6q9mORuLfJ9TNj0w1sURS-kuIF8zskx5saslbtjAGgm7TgNYsFaody2b2PW11tPOG8rlmB3-OKsazgNyoVvGkRQbok5K~sTGzvV0ZrHfwo0BbBIPeCs2AF571zzbOpR4yfBNLgSV7uc83sl1PGf3g~EdQ__"
              alt="Graphics Design"
              className="course-image"
            />
            <h3>Full Stack Development</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>
        </div>
      </div>
      <div className="courses-section">
        <div className="courses-intro">
          <h2>Marketing Courses &gt;&gt;</h2>
          <p>Enhance your creative skills with the right technical training.</p>
        </div>

        <div className="courses-cards">
          <div className="course-card">
            <img
              src="https://s3-alpha-sig.figma.com/img/2307/3472/7bfb77c8c66b2754760c3ab831f9e2c8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j6LNxTNGeaNsNSRM418HpFOglxyl0feOXKIsWW-t26sb1gPzUUM7MYOYbFX8UAiTRdLjvTcKyjuhV8MhKTlo~fSlS78ZFLO8V89uTf~IWCiPCFDneC1nlZSLBq9-0iMYkgiNWJZWjg~85DdOguAIPu8XEJ2tQBc1kLOYGyzQwSXjK4GIyh4r9ESu7RrxO9gmwFokAhrxgKYjUAJ0HlfHjF0dQNntJxiw3sGRHYETC9O3qo8vYwT2XTqjcx3ORU-Z3Q~oDGcL9u9--hoKoa8wsrhuBXGsA87~sEWOV6HCeYvuAAn~5sgeS7uWv9LLDkQQpHXFfDLSjeFgcyiRlvFH0A__"
              alt="Digital Marketing"
              className="course-image"
            />
            <h3>Digital Marketing</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>

          <div className="course-card">
            <img
              src="https://s3-alpha-sig.figma.com/img/f8a8/c12e/1175d54348954ca7c5d48eb32a535850?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAOmGrMp20NZoqJYCQI2DsVuqcY8sZQkkKRtZFAj-XERNp1314YhZ-R4k1HsHEUW~sAywYQad8y0NSJZs7qNfEHY9Oz-cNCVhJh5JK1YbRPUCx-OIIZgtVafM0~5wbXLJAvpDofOePsUgEFXuSj85a2LW78gnkN9DWQoyTJcosbxcuS2JI6x-Pkm-7X81iU0JgOgvW0OupqDtAglVr7k9ZmnYHHWdb1OUTlxf1e1Ji7I~HBhmMndWg4aC5YNHPUDD36JFdj0Ph2A5AUiHAB66ZDoTFYsEU1RBB5aYjQtPm8vtEX8DbRplbbJfaxbYUG9qSmWG7KuFeUWLu4iEsjneg__"
              alt="Social Media Marketing"
              className="course-image"
            />
            <h3>Social Media Marketing</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
