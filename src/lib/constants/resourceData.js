// All resource data in one place — drives both category pages and detail pages
// In Phase 2 this moves to Firestore

export const resourcesByCategory = {
  mentorship: [
    {
      slug: 'find-the-right-mentor',
      title: 'How to Find the Right Mentor',
      desc: 'A step-by-step guide to identifying, approaching, and building a mentoring relationship.',
      type: 'Guide',
      pub: true,
      content: 'Finding the right mentor can accelerate your career and provide invaluable support during challenging times. This guide walks you through identifying potential mentors in your field, crafting a thoughtful outreach message, and building a productive long-term relationship.\n\nYou\'ll learn how to define what you need from a mentor, where to find experienced professionals willing to give their time, and how to make the first conversation count.',
      highlights: ['Identify your mentorship goals', 'Find mentors in your specialty', 'Craft your outreach message', 'Build a lasting relationship'],
    },
    {
      slug: 'mentor-meeting-template',
      title: 'Mentor Meeting Template',
      desc: 'Structured agenda template to make the most of every mentorship session.',
      type: 'Template',
      pub: true,
      content: 'A well-structured meeting makes the difference between a productive mentorship session and an aimless chat. This template gives you a repeatable framework for every meeting.\n\nIncludes sections for check-in, progress review, current challenges, action items, and next steps.',
      highlights: ['Pre-meeting preparation checklist', 'Structured agenda format', 'Action item tracker', 'Follow-up template'],
    },
    {
      slug: 'setting-goals-with-mentor',
      title: 'Setting Goals with Your Mentor',
      desc: 'A framework for defining clear, actionable goals within your mentorship.',
      type: 'Worksheet',
      pub: false,
      content: 'Goal setting is the foundation of effective mentorship. This worksheet helps you and your mentor align on short-term and long-term objectives, define success metrics, and create accountability structures.',
      highlights: ['SMART goal framework adapted for healthcare', 'Short-term vs long-term goal mapping', 'Progress tracking sheet', 'Quarterly review template'],
    },
    {
      slug: 'mentorship-faqs',
      title: 'Mentorship FAQs',
      desc: 'Common questions and answers about our mentorship matching program.',
      type: 'Article',
      pub: true,
      content: 'Everything you need to know about how our mentorship program works — from signing up and getting matched, to what happens during a mentorship, and how to get the most out of it.\n\nWhether you\'re a mentee looking for guidance or an experienced professional considering becoming a mentor, this FAQ covers it all.',
      highlights: ['How matching works', 'Time commitment expectations', 'What to expect from sessions', 'How to switch mentors'],
    },
  ],
  wellness: [
    {
      slug: 'burnout-prevention-guide',
      title: 'Burnout Prevention Guide',
      desc: '40-page PDF with evidence-based interventions used by our mentor network.',
      type: 'PDF · 40 pages',
      pub: true,
      content: 'Burnout among healthcare professionals has reached crisis levels. This comprehensive guide compiles evidence-based interventions, self-assessment tools, and practical strategies that have been validated by our mentor network.\n\nFrom recognizing the early warning signs to implementing daily micro-practices that protect your wellbeing, this is the resource we wish every healthcare professional had on day one.',
      highlights: ['Burnout self-assessment tool', 'Daily micro-practices', 'Workplace boundary strategies', 'Recovery roadmap'],
    },
    {
      slug: 'guided-mindfulness-series',
      title: 'Guided Mindfulness Series',
      desc: '10 audio sessions (5–15 min each) designed for breaks between shifts.',
      type: 'Audio · 10 sessions',
      pub: false,
      content: 'Ten guided mindfulness sessions designed specifically for healthcare professionals. Each session is short enough to fit into a break between shifts, and targeted at the unique stressors of clinical work.\n\nIncludes grounding exercises, body scans, compassion meditations, and quick resets for high-stress moments.',
      highlights: ['5-minute quick reset', '10-minute body scan', '15-minute compassion meditation', 'Pre-shift grounding exercise'],
    },
    {
      slug: 'sleep-hygiene-shift-workers',
      title: 'Sleep Hygiene for Shift Workers',
      desc: 'Practical tips for getting quality rest on a rotating schedule.',
      type: 'Article',
      pub: true,
      content: 'Rotating shifts wreak havoc on sleep patterns. This guide offers practical, science-backed strategies for improving sleep quality when your schedule doesn\'t follow a 9-to-5 pattern.\n\nCovers light exposure management, nap strategies, nutrition timing, and bedroom environment optimization.',
      highlights: ['Light exposure timing guide', 'Strategic nap protocols', 'Nutrition and caffeine timing', 'Bedroom environment checklist'],
    },
    {
      slug: 'stress-management-toolkit',
      title: 'Stress Management Toolkit',
      desc: 'Breathing exercises, journaling prompts, and quick resets for high-pressure days.',
      type: 'Toolkit',
      pub: false,
      content: 'A practical toolkit of stress management techniques you can use in the moment — during a shift, in the parking lot before going home, or at the end of a difficult week.\n\nEach technique takes under 5 minutes and requires nothing but your attention.',
      highlights: ['Box breathing guide', '10 journaling prompts for decompression', '2-minute desk stretches', 'End-of-shift reset ritual'],
    },
    {
      slug: 'peer-support-conversation-starters',
      title: 'Peer Support Conversation Starters',
      desc: 'Prompts to help you check in on colleagues in a meaningful way.',
      type: 'PDF',
      pub: true,
      content: 'Checking in on a colleague shouldn\'t feel awkward. This resource provides natural conversation starters and follow-up questions that open the door to meaningful peer support without feeling forced.\n\nDesigned for use in break rooms, after tough shifts, or anytime you sense a colleague might be struggling.',
      highlights: ['15 conversation starters', 'Active listening tips', 'When to escalate concerns', 'Building a culture of check-ins'],
    },
  ],
  'professional-growth': [
    {
      slug: 'research-publication-toolkit',
      title: 'Research Publication Toolkit',
      desc: 'Checklists, submission trackers, and a step-by-step writing guide.',
      type: 'Toolkit · 8 files',
      pub: false,
      content: 'Getting published for the first time can feel overwhelming. This toolkit breaks the entire process into manageable steps — from choosing a journal to responding to reviewer comments.\n\nIncludes manuscript checklists, submission tracking spreadsheets, and email templates for corresponding with editors.',
      highlights: ['Journal selection guide', 'Manuscript preparation checklist', 'Submission tracker spreadsheet', 'Reviewer response templates'],
    },
    {
      slug: 'conference-preparation-checklist',
      title: 'Conference Preparation Checklist',
      desc: 'Everything you need to prepare for presenting at a healthcare conference.',
      type: 'Checklist',
      pub: true,
      content: 'Presenting at a conference is a career milestone. This checklist ensures you\'re prepared for every stage — from abstract submission to post-presentation networking.\n\nCovers travel logistics, slide design tips, presentation rehearsal strategies, and how to handle Q&A sessions.',
      highlights: ['Abstract submission timeline', 'Slide design best practices', 'Rehearsal framework', 'Networking strategy'],
    },
    {
      slug: 'continuing-education-tracker',
      title: 'Continuing Education Tracker',
      desc: 'Spreadsheet template to log and plan your CPD/CME credits.',
      type: 'Template',
      pub: true,
      content: 'Stay on top of your continuing professional development requirements with this ready-to-use spreadsheet. Track completed credits, plan upcoming activities, and never miss a renewal deadline.\n\nCustomizable for different licensing bodies and specialties.',
      highlights: ['Credit logging by category', 'Deadline reminders setup', 'Annual planning view', 'Customizable for any specialty'],
    },
    {
      slug: 'leadership-skills-clinicians',
      title: 'Leadership Skills for Clinicians',
      desc: 'A primer on developing leadership competencies in clinical settings.',
      type: 'Article',
      pub: false,
      content: 'Leadership in healthcare doesn\'t require a management title. This article explores the core competencies that make clinicians effective leaders — communication, decision-making, conflict resolution, and team building.\n\nIncludes real-world examples from healthcare settings and self-assessment questions.',
      highlights: ['Clinical leadership competencies', 'Communication frameworks', 'Conflict resolution strategies', 'Self-assessment questions'],
    },
  ],
  scholarships: [
    {
      slug: 'scholarship-database',
      title: 'Scholarship Database',
      desc: '200+ scholarships and grants for health sciences students, updated monthly.',
      type: 'Searchable Database',
      pub: false,
      content: 'Our curated database of over 200 scholarships, grants, and funding opportunities for healthcare and health sciences students worldwide. Updated monthly by our team.\n\nFilterable by country, field of study, degree level, and deadline.',
      highlights: ['200+ opportunities', 'Updated monthly', 'Filterable by field and region', 'Deadline alerts'],
    },
    {
      slug: 'scholarship-application-guide',
      title: 'Scholarship Application Guide',
      desc: 'How to write compelling personal statements and applications that stand out.',
      type: 'Guide',
      pub: true,
      content: 'A strong application is more than good grades. This guide teaches you how to write personal statements that connect, gather impactful recommendation letters, and present yourself authentically.\n\nIncludes annotated examples of successful scholarship applications from healthcare students.',
      highlights: ['Personal statement framework', 'Recommendation letter tips', 'Common mistakes to avoid', 'Annotated real examples'],
    },
    {
      slug: 'funding-opportunities-newsletter',
      title: 'Funding Opportunities Newsletter',
      desc: 'Monthly digest of new scholarships, grants, and fellowship deadlines.',
      type: 'Newsletter',
      pub: false,
      content: 'Stay ahead of funding deadlines with our monthly newsletter. Each issue highlights newly available scholarships, upcoming grant deadlines, and fellowship opportunities curated for healthcare professionals and students.',
      highlights: ['Monthly delivery', 'New opportunities each issue', 'Deadline calendar', 'Members-only access'],
    },
  ],
  templates: [
    {
      slug: 'healthcare-cv-templates',
      title: 'Healthcare CV Templates',
      desc: 'Editable Word/PDF templates tailored for clinical and non-clinical roles.',
      type: 'Template Pack · 6 files',
      pub: true,
      content: 'Six professionally designed CV templates built specifically for healthcare professionals. Includes formats for clinical roles, research positions, academic applications, public health careers, and general healthcare administration.\n\nEditable in Microsoft Word and available as PDF.',
      highlights: ['6 role-specific templates', 'Clinical and non-clinical formats', 'Editable Word files', 'PDF versions included'],
    },
    {
      slug: 'cover-letter-templates',
      title: 'Cover Letter Templates',
      desc: 'Three cover letter formats for hospital, research, and nonprofit roles.',
      type: 'Template Pack · 3 files',
      pub: true,
      content: 'Three cover letter templates tailored to the most common healthcare career paths — hospital/clinical roles, research positions, and nonprofit/NGO work.\n\nEach template includes fill-in prompts and examples of strong opening and closing paragraphs.',
      highlights: ['Hospital/clinical template', 'Research position template', 'Nonprofit/NGO template', 'Fill-in prompts included'],
    },
    {
      slug: 'professional-bio-template',
      title: 'Professional Bio Template',
      desc: 'Write a polished bio for conference programs, websites, and LinkedIn.',
      type: 'Template',
      pub: true,
      content: 'A professional bio is one of those things you always need but never have ready. This template helps you write a polished, versatile bio in three lengths — short (50 words), medium (100 words), and full (200+ words).\n\nPerfect for conference programs, LinkedIn, website profiles, and grant applications.',
      highlights: ['Three length options', 'Healthcare-specific examples', 'LinkedIn optimization tips', 'Conference program format'],
    },
    {
      slug: 'event-planning-checklist',
      title: 'Event Planning Checklist',
      desc: 'Step-by-step checklist for organizing healthcare community events.',
      type: 'Checklist',
      pub: false,
      content: 'Planning a community health event, workshop, or networking session? This comprehensive checklist covers every stage — from initial concept and budgeting to day-of logistics and post-event follow-up.',
      highlights: ['Pre-event planning timeline', 'Budget template', 'Day-of logistics checklist', 'Post-event follow-up tasks'],
    },
  ],
};

// Helper to find a resource by category slug + resource slug
export function findResource(categorySlug, resourceSlug) {
  const resources = resourcesByCategory[categorySlug];
  if (!resources) return null;
  return resources.find((r) => r.slug === resourceSlug) || null;
}

// Helper to get all resources flat
export function getAllResources() {
  return Object.entries(resourcesByCategory).flatMap(([catSlug, resources]) =>
    resources.map((r) => ({ ...r, categorySlug: catSlug }))
  );
}
