import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface SearchContextProps {
  searchWords: string[];
  addSearchWord: (word: string) => void;
  resetWord: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedWords = localStorage.getItem("words");
    if (storedWords) {
      setSearchWords(JSON.parse(storedWords));
    }
  }, []);

  const addSearchWord = (word: string) => {
    setSearchWords((prevWords) => {
      const updatedWords = [...prevWords];
      if (!updatedWords.includes(word)) {
        updatedWords.push(word);
        localStorage.setItem("words", JSON.stringify(updatedWords));
      }
      return updatedWords;
    });
  };

  const resetWord = () => {
    localStorage.removeItem("words");
    router.push("/search");
    setSearchWords([]);
  };

  return (
    <SearchContext.Provider value={{ searchWords, addSearchWord, resetWord }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
