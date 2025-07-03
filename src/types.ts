export type MonthData = {
  income?: number;
  activePartners?: number;
  plan: {
    income: number;
    activePartners: number;
  };
  fact: {
    income: number;
    activePartners: number;
  };
};

export type ManagerData = {
  id: number;
  adminId: number;
  adminName: string;
  months: MonthData[];
  year: number;
};
