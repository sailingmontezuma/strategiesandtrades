using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Model
{
    public class StrategyRepository : IStrategyRepository
    {
        private static ConcurrentDictionary<string, Strategy> _strategies =
             new ConcurrentDictionary<string, Strategy>();

        public StrategyRepository()
        {
            Add(new Strategy { Name = "Item1" });
        }
        public void Add(Strategy item)
        {
            item.Key = Guid.NewGuid().ToString();
            _strategies[item.Key] = item;
        }

        public Strategy Find(string key)
        {
            Strategy item;
            _strategies.TryGetValue(key, out item);
            return item;
        }

        public IEnumerable<Strategy> GetAll()
        {
            return _strategies.Values;
        }

        public Strategy Remove(string key)
        {
            Strategy item;
            _strategies.TryRemove(key, out item);
            return item;
        }

        public void Update(Strategy item)
        {
            _strategies[item.Key] = item;
        }
    }
}
