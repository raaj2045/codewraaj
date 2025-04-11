
import { useState } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="pixel-heading text-center">CONTACT ME</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pixel-container">
              <h3 className="font-pixel text-lg mb-4 text-pixel-purple dark:text-pixel-green">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-pixel-body mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border-2 border-black dark:border-white bg-transparent font-pixel-body focus:outline-none focus:border-pixel-green dark:focus:border-pixel-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-pixel-body mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border-2 border-black dark:border-white bg-transparent font-pixel-body focus:outline-none focus:border-pixel-green dark:focus:border-pixel-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-pixel-body mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border-2 border-black dark:border-white bg-transparent font-pixel-body focus:outline-none focus:border-pixel-green dark:focus:border-pixel-purple resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`pixel-button w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="pixel-container">
              <h3 className="font-pixel text-lg mb-4 text-pixel-purple dark:text-pixel-green">Connect With Me</h3>
              
              <div className="space-y-6">
                <p className="font-pixel-body">
                  Whether you have a question, a project idea, or just want to connect, I'm excited to hear from you!
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: <Mail className="w-5 h-5" />, text: "email@example.com", href: "mailto:email@example.com" },
                    { icon: <Linkedin className="w-5 h-5" />, text: "linkedin.com/in/username", href: "https://linkedin.com" },
                    { icon: <Github className="w-5 h-5" />, text: "github.com/username", href: "https://github.com" },
                    { icon: <Twitter className="w-5 h-5" />, text: "@username", href: "https://twitter.com" }
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-pixel-body hover:text-pixel-purple dark:hover:text-pixel-green transition-colors"
                    >
                      <div className="w-8 h-8 border-2 border-black dark:border-white flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
