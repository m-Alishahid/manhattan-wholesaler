'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onClearFilters: () => void;
}

const FilterComponent = ({ categories, selectedCategory, onCategoryChange, onClearFilters }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-primary transition-colors"
      >
        <Filter size={18} />
        <span>Filters</span>
        {selectedCategory !== 'All' && (
          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
            1
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              {categories.map(category => (
                <label key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="mr-2 text-primary focus:ring-primary"
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t">
              <button
                onClick={() => {
                  onClearFilters();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-sm text-primary hover:bg-primary hover:text-white rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
