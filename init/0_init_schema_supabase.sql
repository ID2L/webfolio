CREATE SCHEMA webfolio;
GRANT USAGE ON SCHEMA webfolio TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA webfolio TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA webfolio TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA webfolio TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA webfolio GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA webfolio GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA webfolio GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
