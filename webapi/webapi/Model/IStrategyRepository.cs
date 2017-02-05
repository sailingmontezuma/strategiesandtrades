using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Model
{
    public interface IStrategyRepository
    {
        void Add(Strategy item);
        IEnumerable<Strategy> GetAll();
        Strategy Find(string key);
        Strategy Remove(string key);
        void Update(Strategy item);
    }
}
