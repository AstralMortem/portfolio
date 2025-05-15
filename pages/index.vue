<template>
  <div>
    <UISection id="hero" class="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-primary-50 dark:from-neutral-800 dark:to-neutral-950">
      <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4">
              Full-Stack Developer
            </h1>
            <h2 class="text-xl md:text-2xl text-secondary mb-6">
              Specializing in <span class="text-primary font-semibold">FastAPI</span>, <span class="text-primary font-semibold">Nuxt.js</span> &amp; <span class="text-primary font-semibold">Tailwind CSS</span>
            </h2>
            <p class="text-lg text-secondary mb-8 max-w-lg">
              I create modern, responsive, and performant web applications with clean code and exceptional user experiences.
            </p>
            <div class="flex flex-wrap gap-4">
              <UButton to="/#projects" label="View My Work" size="xl"/>
              <UButton to="/#contact" label="Get In Touch" variant="outline" size="xl"/>
            </div>
          </div>
          <div class="md:w-1/2 hidden md:block" data-aos="fade-left">
            <img src="/images/hero-image.jpg" alt="Developer illustration" class="max-w-full h-auto clip-hero-image">
          </div>
        </div>
    </UISection>
    <UISection id="about" title="About Me">
      <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/3 mb-8 md:mb-0" data-aos="fade-right">
            <div class="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-primary">
              <img src="/images/profile.png" alt="Vladyslav Chaliuk" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="md:w-2/3" data-aos="fade-left">
            <p class="text-lg mb-6 text-secondary">
              👋 Hi, I'm a Full-Stack Developer with a strong focus on building scalable and efficient web applications. I specialize in FastAPI for robust backend APIs and Nuxt.js for dynamic, responsive frontend experiences. With a solid understanding of both client and server-side development, I build complete solutions—from architecture to deployment.
            </p>

            <p class="text-lg mb-6 text-secondary">
              I enjoy working on clean, maintainable code, designing intuitive user interfaces, and solving real-world problems with technology. Whether it's building RESTful APIs, integrating with modern databases, or crafting performant UIs, I bring a thoughtful, detail-oriented approach to every project.
            </p>
            <div class="mt-8">
              <UButton to="/resume.pdf" label="Download CV" class="w-fit" size="xl" leading-icon="i-heroicons-document-arrow-down">
                <template #leading-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </template>
              </UButton>
            </div>
          </div>
        </div>
    </UISection>
    <UISection id="skills" title="Skills" is-darker>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StackCategoryCard title="Frontend Development" category="frontend" icon="mdi:design" data-aos="fade-up" data-aos-delay="100" />
        <StackCategoryCard title="Backend Development" category="backend" icon="mdi:server" data-aos="fade-up" data-aos-delay="100" />
        <StackCategoryCard title="Database" category="database" icon="mdi:database" data-aos="fade-up" data-aos-delay="100" />
        <StackCategoryCard title="CI/CD" category="ci/cd" icon="mdi:test-tube" data-aos="fade-up" data-aos-delay="100" />
        <StackCategoryCard title="Other" category="other" icon="mdi:dots-horizontal" data-aos="fade-up" data-aos-delay="100" />
      </div>
    </UISection>
    <UISection id="projects" title="My Projects">
      <ProjectCarousel/>
    </UISection>
    <UISection id="contact" title="Contact" is-darker>
      <div class="md:w-full mb-8 md:mb-0" data-aos="fade-left">
          <div class=" py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <!-- Contact Header -->
              <div class="text-center mb-12">
                <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Get In Touch
                </h1>
                <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                  I'm always open to new opportunities and interesting projects. Feel free to reach out!
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Contact Form -->
                <NavContactForm/>
                <!-- Contact Info -->
                <UCard>
                  <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0">
                        <Icon name="mdi:envelope" size="2em" class="text-primary-dark"/>
                      </div>
                      <div>
                        <h3 class="text-lg font-medium ">Email</h3>
                        <p class="mt-1 text-gray-600">
                          <a href="mailto:chaliukvladyslav@gmail.com" class="hover:text-indigo-600">chaliukvladyslav@gmail.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0">
                        <Icon name="mdi:location" size="2em" class="text-primary-dark"/>
                      </div>
                      <div>
                        <h3 class="text-lg font-medium ">Location</h3>
                        <p class="mt-1 text-gray-600">Kyiv, Ukraine</p>
                      </div>
                    </div>

                    <div class="pt-6">
                      <h3 class="text-lg font-medium  mb-3">Connect with me</h3>
                      <NavFooterLinks/>
                    </div>
                  </div>
                </UCard>
              </div>
            </div>
          </div>
        </div>
    </UISection>
  </div>
</template>

<script lang="ts" setup>
import { ProjectCarousel } from '#components';


</script>

<style>

</style>