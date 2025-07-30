import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStudentSlide, setCurrentStudentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    preferredUniversity: '',
    fieldOfStudy: '',
    message: ''
  });

  const fieldsOfStudy = [
    'Medicine',
    'Dentistry', 
    'Physiotherapy',
    'Nursing',
    'Applied Health Sciences',
    'Computer Sciences',
    'Cyber Security',
    'Artificial Intelligence',
    'Data Science',
    'Engineering',
    'Natural Sciences',
    'Social Sciences',
    'Other'
  ];

  const universities = [
    { name: 'Cairo University', website: 'https://cu.edu.eg/Home' },
    { name: 'Alexandria University', website: 'https://alexu.edu.eg/index.php/en/' },
    { name: 'Ain Shams University', website: 'https://www.asu.edu.eg/en/' },
    { name: 'Assuit University', website: 'https://www.aun.edu.eg/main/' },
    { name: 'Mansoura University', website: 'https://www.mans.edu.eg/en/' },
    { name: 'Misr University of Science & Tech', website: 'https://www.must.edu.eg/' },
    { name: 'Pharos University', website: 'https://pua.edu.eg/' },
    { name: 'Helwan University', website: 'https://hu.edu.eg/' },
    { name: 'Beni Suef University', website: 'https://www.bsu.edu.eg/Sector.aspx?S=1' },
    { name: 'Future University', website: 'https://fue.edu.eg/' },
    { name: 'MTI University', website: 'https://mti.edu.eg/' },
    { name: '6th October University', website: 'https://o6u.edu.eg/' },
  ];

  const sliderImages = [
    {
      url: "cairouni.jpg",
      title: "Cairo University",
    },
    {
      url: "university.jpeg",
      title: "Alexandria University",
    },
    {
      url: "Assuit .jpg",
      title: "Assuit University",
    },
    {
      url: "Ain.jpg",
      title: "Ain Shams University",
    }
  ];

  const studentImages = [
    {
      url: "https://images.pexels.com/photos/7683897/pexels-photo-7683897.jpeg",
      title: "Campus Life",
      description: "International students enjoying university life"
    },
    {
      url: "https://images.pexels.com/photos/6214718/pexels-photo-6214718.jpeg",
      title: "Library Studies", 
      description: "Collaborative learning environment"
    },
    {
      url: "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg",
      title: "Team Work",
      description: "Students working together on projects"
    },
    {
      url: "https://images.unsplash.com/photo-1689785380577-93f35f4d6bf9",
      title: "Graduation Day",
      description: "Celebrating academic achievements"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      title: "Study Groups",
      description: "Collaborative learning sessions"
    },
    {
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      title: "Campus Friends",
      description: "Building lifelong friendships"
    },
    {
      url: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
      title: "Graduation Ceremony",
      description: "Throwing caps in celebration"
    },
    {
      url: "https://images.unsplash.com/photo-1594750852563-5ed8e0421d40",
      title: "Academic Success",
      description: "Diverse graduates in academic regalia"
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      title: "University Community",
      description: "International students on campus"
    },
    {
      url: "https://images.pexels.com/photos/5905459/pexels-photo-5905459.jpeg",
      title: "Global Students",
      description: "Diverse international student community"
    }
  ];

  const nextStudentSlide = () => {
    setCurrentStudentSlide((prev) => (prev + 1) % studentImages.length);
  };

  const prevStudentSlide = () => {
    setCurrentStudentSlide((prev) => (prev - 1 + studentImages.length) % studentImages.length);
  };

  const goToStudentSlide = (index) => {
    setCurrentStudentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-slide functionality for student slider
  useEffect(() => {
    const studentInterval = setInterval(nextStudentSlide, 4000); // Change slide every 4 seconds
    return () => clearInterval(studentInterval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const emailContent = `
New Application from YANKABA Website:

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Nationality: ${formData.nationality}
Preferred University: ${formData.preferredUniversity}
Field of Study: ${formData.fieldOfStudy}
Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
    `;

    // Create mailto link
    const subject = encodeURIComponent(`New Application - ${formData.fullName}`);
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:support@yankabaedu.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    alert('Application submitted! Your email client will open to send the application details.');
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      nationality: '',
      preferredUniversity: '',
      fieldOfStudy: '',
      message: ''
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'universities', 'fields', 'requirements', 'process', 'testimonials', 'apply', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  // Set page title and favicon
  useEffect(() => {
    document.title = 'YANKABA Education Consultancy - Study in Egypt';
    
    /* Create favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23dc2626"/><text x="50" y="35" font-family="Arial" font-size="12" fill="white" text-anchor="middle" font-weight="bold">YANKABA</text><text x="50" y="50" font-family="Arial" font-size="8" fill="white" text-anchor="middle">EDUCATION</text><text x="50" y="65" font-family="Arial" font-size="8" fill="white" text-anchor="middle">CONSULTANCY</text></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []); */

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center animate-fadeIn">
              <img 
                src="/logo.png" 
                alt="YANKABA Logo" 
                className="w-12 h-12 mr-3 object-contain filter hue-rotate-180 saturate-150 brightness-110"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  YANKABA
                </h1>
                <p className="text-xs text-gray-600">Education Consultancy</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'universities', label: 'Universities' },
                  { id: 'fields', label: 'Fields' },
                  { id: 'requirements', label: 'Requirements' },
                  { id: 'process', label: 'Process' },
                  { id: 'apply', label: 'Apply' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'bg-red-600 text-white shadow-lg shadow-red-300'
                        : 'text-gray-700 hover:bg-red-50 hover:text-red-600 hover:shadow-md'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-all duration-300"
              >
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-300`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-300 rotate-180`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 border border-red-100">
              {[
                { id: 'home', label: 'Home', icon: '🏠' },
                { id: 'about', label: 'About', icon: 'ℹ️' },
                { id: 'services', label: 'Services', icon: '🎯' },
                { id: 'universities', label: 'Universities', icon: '🏛️' },
                { id: 'fields', label: 'Fields', icon: '📚' },
                { id: 'requirements', label: 'Requirements', icon: '📋' },
                { id: 'process', label: 'Process', icon: '🔄' },
                { id: 'apply', label: 'Apply', icon: '✍️' },
                { id: 'contact', label: 'Contact', icon: '📞' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-3 ${
                    activeSection === item.id
                      ? 'bg-red-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600 hover:translate-x-2'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(139, 69, 19, 0.8), rgba(220, 38, 38, 0.9)), url('/graduation.jpg')`
          }}
        ></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slideInFromLeft">
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                      🎓 A JOURNEY TO REMEMBER
                    </span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-5xl font-bold text-white leading-tight animate-fadeInUp">
                    BEGINS YOUR JOURNEY TO ONE OF THE BEST EGYPTIAN
                    <span className="block bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent animate-pulse">
                      UNIVERSITIES
                    </span>
                    <span className="block text-5xl lg:text-6xl">AWAITS</span>
                  </h1>
                  
                  <div className="bg-red-600 text-white px-6 py-3 rounded-lg inline-block transform rotate-1 animate-bounce">
                    <p className="text-xl font-bold">YOU DESERVE THIS SUCCESS!</p>
                  </div>
                  
                  <p className="text-xl text-white/90 leading-relaxed animate-fadeInUp bg-black/30 p-4 rounded-lg backdrop-blur-sm" style={{animationDelay: '0.2s'}}>
                    Join thousands of successful students who achieved their dreams through Egypt's world-class universities. 
                    Your journey to academic excellence starts here with YANKABA Education Consultancy.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                  <button 
                    onClick={() => scrollToSection('apply')}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 transform hover:-translate-y-2 animate-glow"
                  >
                    🚀 START YOUR JOURNEY
                  </button>
                  <button 
                    onClick={() => scrollToSection('requirements')}
                    className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    💰 SCHOLARSHIP INFO
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                  <div className="text-center bg-white/20 backdrop-blur-md rounded-lg p-4 transform hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-bold text-yellow-400 animate-heartbeat">13+</div>
                    <div className="text-white text-sm">Partner Universities</div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur-md rounded-lg p-4 transform hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-bold text-yellow-400 animate-heartbeat" style={{animationDelay: '0.2s'}}>1000+</div>
                    <div className="text-white text-sm">Success Stories</div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur-md rounded-lg p-4 transform hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-bold text-yellow-400 animate-heartbeat" style={{animationDelay: '0.4s'}}>100%</div>
                    <div className="text-white text-sm">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-slideInFromRight lg:block hidden -mt-40">
                {/* Image Slider */}
                <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl border-4 border-white/30">
                  {/* Slider Images */}
                  <div 
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {sliderImages.map((image, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <img 
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-xl font-bold">{image.title}</h3>
                          <p className="text-sm opacity-90">{image.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white shadow-lg' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating graduation elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-500 rounded-full opacity-30 animate-bounce flex items-center justify-center">
                  🎓
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-red-500 rounded-full opacity-40 animate-bounce flex items-center justify-center text-white text-xs" style={{animationDelay: '1s'}}>
                  📜
                </div>
                <div className="absolute top-1/2 -right-8 w-14 h-14 bg-green-500 rounded-full opacity-30 animate-bounce flex items-center justify-center" style={{animationDelay: '0.5s'}}>
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About YANKABA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in accessing world-class education in Egyptian Universities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Official Educational Partner in Egypt
              </h3>
              <p className="text-gray-600 leading-relaxed">
                YANKABA is an Education Consultancy Company that has an active role in facilitating 
                educational procedures in Egypt, through the <strong className="text-red-600">Central Department 
                for International Students Affairs (WAFEDEN)</strong>, Under the <strong className="text-red-600">Ministry 
                of Higher Education Egypt</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our diverse team of experts offer counselling advice for applicants and help them get 
                admission into their desired Universities. We lead you through the complex University 
                system to help you win places in the top Universities.
              </p>
              
              <div className="grid grid-cols-1 gap-4 pt-6">
                {[
                  {
                    title: "One to One Consultation",
                    description: "Personalized guidance tailored to your academic goals",
                    icon: "👥"
                  },
                  {
                    title: "Highly Motivated Team",
                    description: "StudyInEgypt professionals dedicated to your success",
                    icon: "🎯"
                  },
                  {
                    title: "User Friendly Environment",
                    description: "Supportive and accessible consultation experience",
                    icon: "🌟"
                  },
                  {
                    title: "Easiest Process",
                    description: "From applying, acceptance to enrollment - simplified",
                    icon: "✅"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg mt-8">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-bold text-lg">Officially Authorized</h4>
                </div>
                <p className="text-red-100 text-sm">
                  Licensed and authorized by the Egyptian Ministry of Higher Education through WAFEDEN
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5412285/pexels-photo-5412285.jpeg" 
                alt="International Student"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your educational journey in Egypt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "University Selection",
                description: "Expert guidance in choosing the right university and program that matches your career goals and preferences.",
                icon: "🎓"
              },
              {
                title: "Application Assistance",
                description: "Complete support with application forms, document preparation, and submission to your chosen universities.",
                icon: "📝"
              },
              {
                title: "Visa Support",
                description: "Comprehensive visa guidance and documentation support to ensure smooth entry into Egypt.",
                icon: "✈️"
              },
              {
                title: "Accommodation Help",
                description: "Assistance in finding suitable and affordable accommodation near your university campus.",
                icon: "🏠"
              },
              {
                title: "Pre-Departure Briefing",
                description: "Orientation sessions to prepare you for life and studies in Egypt, including cultural insights.",
                icon: "🌟"
              },
              {
                title: "Ongoing Support",
                description: "Continuous support throughout your studies, from enrollment to graduation and beyond.",
                icon: "🤝"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Universities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access to Egypt's most prestigious educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{university.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Offering world-class education with modern facilities and experienced faculty.
                </p>
                <a 
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-red-600 text-sm font-medium hover:text-red-800 transition-colors"
                >
                  <span>Visit University Website</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fields of Study Section */}
      <section id="fields" className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fields of Study</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore diverse academic programs available at our partner Egyptian universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                field: "Medicine",
                description: "Comprehensive medical education with modern facilities and clinical training",
                icon: "🏥",
                duration: "6 years",
                category: "Health Sciences"
              },
              {
                field: "Dentistry", 
                description: "Advanced dental studies with practical clinical experience",
                icon: "🦷",
                duration: "6 years",
                category: "Health Sciences"
              },
              {
                field: "Physiotherapy",
                description: "Physical therapy and rehabilitation sciences program",
                icon: "🏃‍♂️",
                duration: "4 years",
                category: "Health Sciences"
              },
              {
                field: "Nursing",
                description: "Professional nursing education with clinical practice",
                icon: "👩‍⚕️",
                duration: "4 years",
                category: "Health Sciences"
              },
              {
                field: "Applied Health Sciences",
                description: "Interdisciplinary health sciences and medical technology",
                icon: "🔬",
                duration: "4 years",
                category: "Health Sciences"
              },
              {
                field: "Computer Sciences",
                description: "Software development, programming, and computer systems",
                icon: "💻",
                duration: "4 years",
                category: "Technology"
              },
              {
                field: "Cyber Security",
                description: "Information security, network protection, and digital forensics",
                icon: "🔒",
                duration: "4 years",
                category: "Technology"
              },
              {
                field: "Artificial Intelligence",
                description: "Machine learning, robotics, and AI system development",
                icon: "🤖",
                duration: "4 years",
                category: "Technology"
              },
              {
                field: "Data Science",
                description: "Big data analytics, statistics, and business intelligence",
                icon: "📊",
                duration: "4 years",
                category: "Technology"
              },
              {
                field: "Engineering",
                description: "Civil, Mechanical, Electrical, Chemical and other engineering disciplines",
                icon: "⚙️",
                duration: "5 years",
                category: "Engineering"
              },
              {
                field: "Natural Sciences",
                description: "Physics, Chemistry, Biology, Mathematics, and Earth Sciences",
                icon: "🧪",
                duration: "4 years",
                category: "Sciences"
              },
              {
                field: "Social Sciences",
                description: "Psychology, Sociology, Political Science, and International Relations",
                icon: "🌍",
                duration: "4 years",
                category: "Liberal Arts"
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
                      {program.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {program.field}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* More Programs Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-white p-6 flex flex-col justify-center items-center text-center hover:-translate-y-2">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-bold mb-2">And More!</h3>
              <p className="text-red-100 text-sm mb-4">
                Many other specialized programs available across all our partner universities
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-red-50 transition-colors"
              >
                Explore All Programs
              </button>
            </div>
          </div>

          {/* Categories Overview */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Health Sciences", count: "5+ Programs", color: "green", icon: "🏥" },
              { category: "Technologies", count: "4+ Programs", color: "blue", icon: "💻" },
              { category: "Engineering", count: "10+ Programs", color: "purple", icon: "⚙️" },
              { category: "Liberal Arts", count: "15+ Programs", color: "orange", icon: "📖" }
            ].map((cat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">{cat.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{cat.category}</h4>
                <p className="text-sm text-gray-600">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements & Costs Section */}
      <section id="requirements" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Requirements & Cost Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing and simple requirements for your scholarship application
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Copy of Passport Data Page",
                    description: "Clear, legible copy of your passport's main information page"
                  },
                  {
                    title: "Certificate of Birth",
                    description: "Official birth certificate from your country of origin"
                  },
                  {
                    title: "Primary and Secondary Certificates",
                    description: "Academic transcripts and certificates from primary and secondary education"
                  },
                  {
                    title: "Six (6) Passport Photographs",
                    description: "Recent passport-size photographs with white background (35mm x 45mm)"
                  },
                  {
                    title: "Recommendation Letter from Embassy",
                    description: "Official recommendation letter from your country's embassy"
                  }
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors duration-300 border-l-4 border-green-500">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{requirement.title}</h4>
                      <p className="text-gray-600 text-sm">{requirement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> All documents must be officially translated into Arabic and English if not already in these languages.
                  </p>
                </div>
              </div>
            </div>

            {/* Costs Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Admission Cost Breakdown</h3>
              </div>

              <div className="space-y-4">
                {[
                  { item: "Application Fee", amount: "$175", type: "government" },
                  { item: "Admission Fee", amount: "$170", type: "government" },
                  { item: "Students Club Fund", amount: "$150", type: "government" },
                  { item: "University Registration Services", amount: "$1,500", type: "government" },
                  { item: "Annual Latency Fee", amount: "$300/year", type: "latency", description: "Annual administrative processing fee" },
                  { item: "Certification of Documents/Stamps", amount: "$100", type: "government" },
                  { item: "Service Fee", amount: "$500", type: "service" }
                ].map((cost, index) => (
                  <div key={index} className={`flex justify-between items-center p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                    cost.type === 'service' 
                      ? 'border-blue-200 bg-blue-50 hover:bg-blue-100' 
                      : cost.type === 'latency'
                      ? 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                  }`}>
                    <div className="relative z-10">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        {cost.item}
                        {cost.type === 'latency' && (
                          <span className="ml-2 text-gray-600">📅</span>
                        )}
                      </h4>
                      {cost.description && (
                        <p className="text-xs text-gray-600 mt-1 font-medium">{cost.description}</p>
                      )}
                      {cost.type === 'government' && (
                        <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                          Government/University Fee
                        </span>
                      )}
                      {cost.type === 'service' && (
                        <span className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full">
                          YANKABA Service Fee
                        </span>
                      )}
                      {cost.type === 'latency' && (
                        <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
                          Annual Administrative Fee
                        </span>
                      )}
                    </div>
                    <div className="text-right relative z-10">
                      <div className={`text-xl font-bold ${
                        cost.type === 'latency' ? 'text-gray-900' :
                        'text-gray-900'
                      }`}>
                        {cost.amount}
                      </div>
                      {cost.type === 'latency' && (
                        <div className="text-xs text-gray-600 font-bold">Per year</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t-2 border-gray-200">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Base Required Fees:</span>
                    <span className="text-lg font-semibold text-gray-700">$2,595</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-3 border-green-300 rounded-xl p-6 shadow-lg">
                    <div className="text-center mb-4">
                      <h4 className="text-2xl font-bold text-green-800 mb-2">🏆 PREMIUM SCHOLARSHIP PACKAGE</h4>
                      <div className="text-4xl font-bold text-green-600">$8,000</div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-green-800">
                      <div className="space-y-2">
                        <p className="font-bold">✅ COMPLETE FREE EDUCATION (4-6 years)</p>
                        <p className="font-bold">✅ ONE TIME TUITION FEES THROUGHOUT STUDIES</p>
                        <p className="font-bold">✅ SAVE UP TO $50,000 </p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-bold">✅ 100% SCHOLARSHIP </p>
                        <p className="font-bold">✅ STUDENT SUPPORT SERVICE</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-3 border-blue-300 rounded-xl p-6 shadow-lg">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-blue-800 mb-2">💎THE TOTAL COSTS OF ADMISSION AND SCHOLARSHIP </h4>
                      <div className="text-5xl font-bold text-blue-600 mb-2">$10,595</div>
                      <div className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full inline-block font-bold">
                        🚀 THEN STUDY COMPLETELY FREE FOR REMAINING YEARS!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Payment Terms
                </h4>
                <div className="space-y-2 text-sm text-red-700">
                  <p>• <strong>All fees except Service Fee</strong> are standard government/university requirements</p>
                  <p>• <strong>Service Fee Payment:</strong> 50% ($250) required at the beginning</p>
                  <p>• <strong>Balance Payment:</strong> Remaining 50% ($250) due when admission is secured</p>
                  <p>• <strong>Flexible Payment Plans Available</strong> - Contact us to discuss options</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Begin Your Educational Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                All fees are transparently listed with no hidden charges. We're committed to making your educational dreams affordable and accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('apply')}
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Start Application Process
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start your educational journey in Egypt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free consultation to understand your goals and recommend suitable universities."
              },
              {
                step: "02", 
                title: "Application Preparation",
                description: "We help prepare all required documents and submit applications to your chosen universities."
              },
              {
                step: "03",
                title: "Admission & Visa",
                description: "Support with admission confirmation and student visa application process."
              },
              {
                step: "04",
                title: "Pre-Departure",
                description: "Orientation, accommodation assistance, and preparation for your journey to Egypt."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-red-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students studying in Egypt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sadat Umar",
                country: "Niger",
                university: "Cairo University",
                program: "Engineering",
                image: "/student1.jpg",
                testimonial: "The guidance I received was outstanding. From application to visa, everything was handled professionally and efficently."
              },
              {
                name: "Khadija Hassan",
                country: "Sudan",
                university: "Alexandria University", 
                program: "Medicine",
                image: "https://images.unsplash.com/photo-1659353886114-9aa119aef5aa",
                testimonial: "YANKABA made my dream of studying medicine in Egypt a reality. Their support was exceptional throughout the entire process."
              },
              {
                name: "Tahir Hafiz",
                country: "Nigeria",
                university: "Ain Shams University",
                program: "Cyber Security",
                image: "/student.jpg",
                testimonial: "I couldn't have asked for better support. YANKABA truly cares about their students' success and future."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                    <p className="text-sm text-red-600">{testimonial.program} at {testimonial.university}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Gallery Section */}
      <section id="student-gallery" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Amazing Students</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our diverse community of international students who are living their dreams in Egypt
            </p>
          </div>

          {/* Student Image Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative w-full h-96 overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50">
              {/* Slider Images */}
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentStudentSlide * 100}%)` }}
              >
                {studentImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 relative group">
                    <img 
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg opacity-90">{image.description}</p>
                    </div>
                    
                    {/* Decorative overlay */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-semibold">YANKABA Student</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevStudentSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-md text-white p-3 rounded-full hover:from-blue-500/30 hover:to-green-500/30 transition-all duration-300 z-10 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextStudentSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md text-white p-3 rounded-full hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300 z-10 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {studentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStudentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStudentSlide 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/4 -right-12 w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full opacity-25 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Take the first step towards your Egyptian education journey
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Your nationality"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredUniversity" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred University *
                  </label>
                  <select
                    id="preferredUniversity"
                    name="preferredUniversity"
                    value={formData.preferredUniversity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a university</option>
                    {universities.map((uni, index) => (
                      <option key={index} value={uni.name}>{uni.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-2">
                    Field of Study *
                  </label>
                  <select
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select field of study</option>
                    {fieldsOfStudy.map((field, index) => (
                      <option key={index} value={field}>{field}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Tell us more about your goals and any specific requirements..."
                ></textarea>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <p className="text-red-800 font-medium mb-1">Next Steps:</p>
                    <p className="text-red-700">
                      After submitting this application, we'll contact you within 24 hours to discuss document requirements and next steps. 
                      Please check our <button onClick={() => scrollToSection('requirements')} className="underline font-medium hover:text-red-800">Requirements & Costs</button> section for detailed information.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your journey? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+234 8064846033</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+20 1123206529</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7842665/pexels-photo-7842665.jpeg" 
                  alt="Education Success"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="YANKABA Logo" 
                  className="w-10 h-10 mr-3 object-contain filter hue-rotate-180 saturate-150 brightness-110"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  YANKABA
                </h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner for accessing world-class education opportunities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('universities')} className="hover:text-white transition-colors">Universities</button></li>
                <li><button onClick={() => scrollToSection('fields')} className="hover:text-white transition-colors">Fields of Study</button></li>
                <li><button onClick={() => scrollToSection('requirements')} className="hover:text-white transition-colors">Requirements & Costs</button></li>
                <li><button onClick={() => scrollToSection('apply')} className="hover:text-white transition-colors">Apply Now</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Universities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Cairo University</li>
                <li>Alexandria University</li>
                <li>Ain Shams University</li>
                <li>And 10 more...</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Phone: +234 8064846033 </p>
                <p>WhatsApp: +20 1123206529</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 YANKABA Education Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
