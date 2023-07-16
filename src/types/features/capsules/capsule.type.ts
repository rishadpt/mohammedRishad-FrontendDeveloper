export type ICapsuleState = {
  error: boolean;
  loading: boolean;
  filterdData: any;
  status: 'idle' | 'error' | 'success' | 'loading';
  message: string | null;
  data: IMaidListItem[] | null;
  singleMaid: any;
  filterdDataBackup: any,
  totalLength: number;
};

export type IMaidListItem = {
  option: 'Live-in' | 'Live-out';
  location:
  | 'Abu Dhabi'
  | 'Dubai'
  | 'Sharjah'
  | 'Ajman'
  | 'Umm Al Quwain'
  | 'Ras Al Khaimah'
  | 'Fujairah'
  | 'Al Ain';
  availability: boolean;
  skills: string;
  age: number;
  salary: { from: number; to: number };
  nationality: string;
  name: string;
  id: string;
  service: string;
  profile: string;
  references: boolean;
  employmentHistory: any[];
};

export type IFeaturedMaidCard = {
  id: string;
  name: string;
  experience: number;
  profile: string;
  salary: {
    from: number;
    to: number;
  };
  nationality: string;
  option: string;
  reference: boolean;
  hired: boolean;
}


