import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type StoredReview = {
  id: string;
  name: string;
  rating: number;
  text: string;
  approved: boolean;
  date: string;
};

type Ctx = {
  reviews: StoredReview[];
  submit: (r: { name: string; rating: number; text: string }) => void;
  approve: (id: string) => void;
  remove: (id: string) => void;
};

const ReviewsContext = createContext<Ctx | null>(null);
const KEY = "cdc_reviews_v1";

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<StoredReview[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(reviews));
  }, [reviews]);

  const submit: Ctx["submit"] = (r) =>
    setReviews((prev) => [
      {
        id: crypto.randomUUID(),
        ...r,
        approved: false,
        date: new Date().toISOString().slice(0, 10),
      },
      ...prev,
    ]);

  const approve: Ctx["approve"] = (id) =>
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, approved: true } : r)));

  const remove: Ctx["remove"] = (id) =>
    setReviews((prev) => prev.filter((r) => r.id !== id));

  return (
    <ReviewsContext.Provider value={{ reviews, submit, approve, remove }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export function useReviews() {
  const ctx = useContext(ReviewsContext);
  if (!ctx) throw new Error("useReviews must be inside ReviewsProvider");
  return ctx;
}
