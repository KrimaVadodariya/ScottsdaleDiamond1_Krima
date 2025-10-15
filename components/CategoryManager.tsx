'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, X, Check } from 'lucide-react';

export default function CategoryManager({ onSelect }: { onSelect: (category: string) => void }) {
  const [categories, setCategories] = useState<Array<{_id: string, name: string}>>([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    
    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCategory })
      });
      
      if (res.ok) {
        setNewCategory('');
        fetchCategories();
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to add category');
      }
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Error adding category');
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    
    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: 'DELETE'
      });
      
      if (res.ok) {
        fetchCategories();
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to delete category');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Error deleting category');
    }
  };

  const handleUpdateCategory = async (id: string) => {
    if (!editValue.trim()) return;
    
    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editValue })
      });
      
      if (res.ok) {
        setEditingId(null);
        fetchCategories();
      } else {
        const error = await res.json();
        alert(error.error || 'Failed to update category');
      }
    } catch (error) {
      console.error('Error updating category:', error);
      alert('Error updating category');
    }
  };

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <select
          onChange={(e) => onSelect(e.target.value)}
          className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category"
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            onClick={handleAddCategory}
            className="p-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
            title="Add category"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
      
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {categories.map((category) => (
          <div key={category._id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
            {editingId === category._id ? (
              <div className="flex-1 flex items-center space-x-2">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-1 p-1 border rounded"
                  autoFocus
                />
                <button
                  onClick={() => handleUpdateCategory(category._id)}
                  className="p-1 text-green-600 hover:text-green-800"
                  title="Save"
                >
                  <Check size={18} />
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                  title="Cancel"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <div className="flex-1">{category.name}</div>
            )}
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setEditingId(category._id);
                  setEditValue(category.name);
                }}
                className="p-1 text-blue-600 hover:text-blue-800"
                title="Edit"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => handleDeleteCategory(category._id)}
                className="p-1 text-red-600 hover:text-red-800"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
