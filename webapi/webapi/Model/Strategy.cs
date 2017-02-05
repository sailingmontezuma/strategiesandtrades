using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Model
{
    public class Strategy
    {
        public string Name { get; set; }
        public string Key { get; set; }
        public int Id { get; set; }
        public string Descriprion { get; set; }
        public string Symbol { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string Interval { get; set; }
        public DateTime DateCreated { get; set; }
        public double ValueEntryStart { get; set; }
        public double ValueEntryEnd { get; set; }
        public double ValueEntryTolerance { get; set; }
        public double ValueExit { get; set; }
        public double ValueExitTolerance { get; set; }

    }
}
