export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
  imageUrl: string;
  achievements?: string[];
  companies: {
    name: string;
    logo: string;
  }[];
}

export type AdvisorMember = Omit<TeamMember, 'achievements'>;