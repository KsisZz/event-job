CREATE TABLE submissions (
 id TEXT PRIMARY KEY NOT NULL,
 owner_id TEXT NOT NULL,
 payload TEXT NOT NULL,
 status TEXT NOT NULL DEFAULT 'pending',
 reason TEXT NOT NULL DEFAULT '',
 created_at TEXT NOT NULL,
 reviewed_at TEXT,
 reviewer TEXT
);
--> statement-breakpoint
CREATE INDEX submissions_status_created ON submissions(status, created_at);
--> statement-breakpoint
CREATE INDEX submissions_owner_created ON submissions(owner_id, created_at);
