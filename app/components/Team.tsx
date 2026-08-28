'use client';

import { useState } from 'react';
import { Cog, GraduationCap, Landmark, Search, Quote, X, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Sparkles, User } from 'lucide-react';
import { IconBadge } from './IconBadge';
import { TEAM_MEMBERS, TeamMember } from '../data/teamMembers';

const CATEGORIES = ['All', 'AI & Software', 'Hardware & IoT', 'Design', 'Operations & Legal', 'Leadership & Founders'];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'AI & Software': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'Hardware & IoT': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  'Design': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  'Operations & Legal': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'Leadership & Founders': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  'Core Team': { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
};

const INITIAL_VISIBLE_COUNT = 8;

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState(false);

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const filteredMembers = TEAM_MEMBERS.filter((member) => {
    const matchesCategory = selectedCategory === 'All' || member.category === selectedCategory;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.story.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Determine displayed members based on category, search, and showAll state
  const isAllTabWithoutSearch = selectedCategory === 'All' && searchQuery.trim() === '';
  const displayedMembers = (isAllTabWithoutSearch && !showAll)
    ? filteredMembers.slice(0, INITIAL_VISIBLE_COUNT)
    : filteredMembers;

  const hasMoreMembers = isAllTabWithoutSearch && filteredMembers.length > INITIAL_VISIBLE_COUNT;

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const openModal = (member: TeamMember) => {
    setActiveMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveMember(null);
    document.body.style.overflow = 'unset';
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (!activeMember) return;
    const currentIndex = filteredMembers.findIndex((m) => m.id === activeMember.id);
    if (currentIndex === -1) return;

    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + filteredMembers.length) % filteredMembers.length;
      setActiveMember(filteredMembers[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % filteredMembers.length;
      setActiveMember(filteredMembers[nextIndex]);
    }
  };

  return (
    <section id="team" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership & Ecosystem Overview */}
        <div className="animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Leadership</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">
            25 years of enterprise AI.<br className="hidden sm:inline" />One fixed deadline.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-brand-muted leading-[1.7] max-w-[560px]">
            Bennet&apos;s 25+ years of enterprise technology leadership is the guarantee behind every milestone commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 mt-10 md:mt-14 items-start">
          <div className="border border-brand-border rounded-2xl overflow-hidden animate-fade-in shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
            {/* Header / Photo Banner */}
            <div className="bg-brand-dark p-8 sm:p-10 text-center relative flex flex-col items-center justify-center">
              <a 
                href="https://www.linkedin.com/in/pkbennet/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/photo relative block mb-4"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center transition-transform group-hover/photo:scale-105">
                  <img
                    src="/team/bennet.jpg"
                    alt="Bennet Prasannakumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pkbennet/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[22px] sm:text-[24px] text-white hover:text-brand-orange transition-colors flex items-center gap-2 no-underline"
              >
                <span>Bennet Prasannakumar</span>
                <svg className="w-4 h-4 text-[#0A66C2] fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </a>
              <div className="text-[13px] text-white/70 mt-0.5">Founder · icebrkr · Geneva, Switzerland</div>
            </div>

            {/* Content Body */}
            <div className="p-8 sm:p-10 bg-white flex flex-col justify-between flex-1">
              {/* About Ben */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-brand-red block mb-2">About Bennet</span>
                <p className="text-[14px] text-brand-ink leading-[1.7] font-medium">
                  Bennet is a seasoned technology executive with 25+ years of global experience leading large-scale digital transformation and AI initiatives, bringing together the agility of a startup CTO and the strategic governance of an enterprise technology leader.
                </p>
              </div>

              {/* Ben about icebrkr Quote */}
              <div className="p-5 bg-brand-bg border border-brand-border/80 rounded-2xl relative">
                <Quote className="w-5 h-5 text-brand-orange/50 absolute -top-2.5 left-4 bg-white px-1" />
                <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-muted mb-1 pt-1">On Icebrkr</div>
                <div className="text-[14px] font-serif text-brand-ink leading-relaxed italic">
                  &ldquo;icebrkr is my second love. Let’s keep the first a secret.&rdquo;
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="mt-8 pt-6 border-t border-brand-border/50 flex items-center justify-between">
                <span className="text-[12px] text-brand-muted font-medium">25+ Yrs Enterprise AI</span>
                <a
                  href="https://www.linkedin.com/in/pkbennet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-lg text-[13px] font-semibold hover:bg-[#084e96] transition-colors shadow-sm no-underline"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="font-bold text-[18px] text-brand-ink mb-2">Technology & Delivery Partners</div>

            <div className="flex gap-5 items-start">
              <IconBadge icon={Cog} tone="red" size="sm" className="shrink-0 rounded-lg" />
              <div>
                <div className="font-bold text-[15px] text-brand-ink mb-1.5">Technomark</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">
                  Technology delivery partner. 30+ SRM engineers on active sprints. Milestone-locked contracts. Sprint governance via VAIZ platform.
                </div>
              </div>
            </div>


            <div className="flex gap-5 items-start">
              <IconBadge icon={Landmark} tone="green" size="sm" className="shrink-0 rounded-lg" />
              <div>
                <div className="font-bold text-[15px] text-brand-ink mb-1.5">India Legal Architecture</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">
                  Incorporated in India. Built on EU AI privacy guidelines- NLPD_GDPR certified.
                </div>
              </div>
            </div>

            <div className="mt-4 p-6 bg-brand-bg rounded-[10px] border border-brand-border">
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-muted mb-3">96-Day Launch Campaign</div>
              <div className="text-[14px] text-brand-ink leading-[1.6]">
                18-language social reach. 50,000+ captive early adopters from SRM University cohort. GenZ-first acquisition strategy.
              </div>
              <div className="mt-3 text-[13px] text-brand-muted">
                For GenZ partnerships:{' '}
                <a href="mailto:genz@icebrkr.one" className="text-brand-ink font-semibold hover:underline">
                  genz@icebrkr.one
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* Full Team Grid Section */}
        {/* ---------------------------------------------------- */}
        <div className="mt-28 border-t border-brand-border/60 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-[11px] font-bold uppercase tracking-[1.5px] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Builders Behind Icebrkr</span>
              </div>
              <h3 className="font-serif text-[clamp(28px,3vw,38px)] text-brand-ink leading-[1.2]">
                Meet Our Team
              </h3>
              <p className="text-[15px] text-brand-muted mt-2 max-w-[600px]">
                Built by Gen Z for everyone. Engineers, data analysts, designers, and domain specialists driving the AI Operating System forward.
              </p>
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                placeholder="Search by name, role, or skill..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value) setShowAll(true);
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-brand-bg border border-brand-border rounded-xl text-[14px] text-brand-ink placeholder:text-brand-muted/70 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-ink"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-brand-border/40">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  if (cat !== 'All') setShowAll(true);
                }}
                className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-dark text-white shadow-sm'
                    : 'bg-brand-bg text-brand-muted border border-brand-border hover:bg-gray-100 hover:text-brand-ink'
                }`}
              >
                {cat}
                {cat === 'All' ? ` (${TEAM_MEMBERS.length})` : ''}
              </button>
            ))}
          </div>

          {/* Team Members Grid */}
          {filteredMembers.length === 0 ? (
            <div className="text-center py-16 bg-brand-bg/50 rounded-2xl border border-brand-border/60">
              <User className="w-12 h-12 text-brand-muted/40 mx-auto mb-3" />
              <div className="text-[17px] font-semibold text-brand-ink mb-1">No team members found</div>
              <p className="text-[14px] text-brand-muted">Try clearing your search query or selecting another department tab.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setShowAll(false);
                }}
                className="mt-4 px-4 py-2 bg-brand-red text-white text-[13px] font-medium rounded-lg hover:bg-brand-red/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedMembers.map((member, idx) => {
                  const catStyle = CATEGORY_COLORS[member.category] || CATEGORY_COLORS['Core Team'];
                  const hasPhoto = member.photo && !imgErrors[member.id];

                  return (
                    <div
                      key={`${member.id}-${idx}`}
                      onClick={() => openModal(member)}
                      className="group border border-brand-border/70 bg-white rounded-2xl overflow-hidden hover:border-brand-red/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        {/* Photo Header */}
                        <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center">
                          {hasPhoto ? (
                            <img
                              src={member.photo}
                              alt={member.name}
                              onError={() => handleImgError(member.id)}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-red/80 to-brand-orange/80 text-white font-serif font-bold text-2xl flex items-center justify-center shadow-md">
                              {getInitials(member.name)}
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white text-[12px] font-medium flex items-center gap-1">
                              <Quote className="w-3.5 h-3.5 text-brand-orange" />
                              Read story
                            </span>
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}
                            >
                              {member.category}
                            </span>
                          </div>

                          <h4 className="font-bold text-[16px] text-brand-ink group-hover:text-brand-red transition-colors truncate">
                            {member.name}
                          </h4>
                          <p className="text-[13px] text-brand-muted mt-1 leading-snug line-clamp-2 min-h-[36px] overflow-hidden text-ellipsis">
                            {member.role.length > 55 ? `${member.role.slice(0, 55).trim()}...` : member.role}
                          </p>
                        </div>
                      </div>

                      {/* Story Preview snippet if available */}
                      {member.story && (
                        <div className="px-5 pb-5 pt-0">
                          <div className="p-3 bg-brand-bg/80 border border-brand-border/50 rounded-xl text-[12px] leading-relaxed text-brand-muted italic relative group-hover:bg-brand-bg transition-colors overflow-hidden text-ellipsis">
                            &ldquo;{member.story.length > 85 ? `${member.story.slice(0, 85).trim()}...` : member.story}&rdquo;
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Show More / Show Less Button */}
              {isAllTabWithoutSearch && (
                <div className="mt-12 text-center">
                  {!showAll ? (
                    <button
                      onClick={() => setShowAll(true)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark text-white font-semibold text-[14px] rounded-full hover:bg-brand-ink transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Show More Team Members ({filteredMembers.length - INITIAL_VISIBLE_COUNT} more)</span>
                      <ChevronDown className="w-4 h-4 text-brand-orange" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setShowAll(false);
                        const teamSection = document.getElementById('team');
                        if (teamSection) {
                          teamSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-bg text-brand-ink border border-brand-border font-semibold text-[14px] rounded-full hover:bg-gray-100 transition-all cursor-pointer"
                    >
                      <span>Show Less</span>
                      <ChevronUp className="w-4 h-4 text-brand-muted" />
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Member Details Modal */}
      {activeMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-brand-border flex flex-col md:flex-row max-h-[85vh] md:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 w-8 h-8 md:w-9 md:h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateModal('prev')}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 hover:bg-white text-brand-ink shadow-md flex items-center justify-center transition-colors cursor-pointer"
              title="Previous member"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => navigateModal('next')}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/90 hover:bg-white text-brand-ink shadow-md flex items-center justify-center transition-colors cursor-pointer"
              title="Next member"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Left side Image */}
            <div className="w-full md:w-1/2 bg-slate-100 relative h-[220px] sm:h-[260px] md:h-auto md:min-h-[400px] flex items-center justify-center shrink-0">
              {activeMember.photo && !imgErrors[activeMember.id] ? (
                <img
                  src={activeMember.photo}
                  alt={activeMember.name}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-brand-red to-brand-orange text-white font-serif font-bold text-3xl sm:text-4xl flex items-center justify-center shadow-lg">
                  {getInitials(activeMember.name)}
                </div>
              )}
            </div>

            {/* Right side Info */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[55vh] md:max-h-[90vh]">
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold border mb-2.5 ${
                    CATEGORY_COLORS[activeMember.category]?.bg || 'bg-gray-100'
                  } ${CATEGORY_COLORS[activeMember.category]?.text || 'text-gray-700'} ${
                    CATEGORY_COLORS[activeMember.category]?.border || 'border-gray-200'
                  }`}
                >
                  {activeMember.category}
                </span>

                <h3 className="font-bold text-[20px] sm:text-[24px] text-brand-ink leading-tight">{activeMember.name}</h3>
                <div className="text-[13px] sm:text-[14px] font-medium text-brand-red mt-1">{activeMember.role}</div>

                {activeMember.story && (
                  <div className="mt-4 sm:mt-6 p-3.5 sm:p-4 bg-brand-bg border border-brand-border/60 rounded-2xl relative">
                    <Quote className="w-5 h-5 text-brand-orange/40 absolute -top-2.5 left-4 bg-white px-1" />
                    <div className="text-[13px] sm:text-[14px] text-brand-ink leading-relaxed italic pt-1">
                      &ldquo;{activeMember.story}&rdquo;
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 sm:mt-8 pt-3 border-t border-brand-border/40 flex items-center justify-between text-[11px] sm:text-[12px] text-brand-muted">
                <span>Icebrkr Core Team</span>
                <span className="font-semibold text-brand-ink">Geneva · SRM Cohort</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
